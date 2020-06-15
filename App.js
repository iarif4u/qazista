/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity,
    View,
    TextInput,
    Text,
    StatusBar,
    Modal,
    Linking
} from 'react-native';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo';
import axios from "axios";
import {
    LearnMoreLinks,
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
    Karla_400Regular,
    Karla_400Regular_Italic,
    Karla_700Bold,
    Karla_700Bold_Italic,
} from '@expo-google-fonts/karla';
import {APPS_COLOR, authHeader, DISPLAY_WIDTH, POST_URL, URL, ROW_WIDTH, LOGO} from './src/Const';
import Card from './src/Card';
import Loading from './src/Loading';
import Image from "react-native-scalable-image";

const App: () => React$Node = () => {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [country, setCountry] = useState(null);
    const [phone, setPhone] = useState(null);
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Karla_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }else{
    return (
        <>
            <StatusBar backgroundColor={APPS_COLOR} barStyle="dark-content"/>
            <SafeAreaView style={styles.scrollView}>
                <Modal animated={false} transparent={false} visible={modal}>
                    <TouchableOpacity onPress={() => {
                        setModal(false);
                    }} style={{alignSelf: 'flex-end', padding: 10}}>
                        <Text>X</Text>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 50,
                        backgroundColor: '#fff',
                    }}>
                        <Text style={{fontSize: 18}}>Subscribe</Text>
                        <TextInput
                            style={{
                                width: ROW_WIDTH,
                                height: 50,
                                marginTop: 20,
                                borderColor: APPS_COLOR,
                                borderWidth: 1,
                            }}
                            value={email}
                            placeholder="Email Address"
                            keyboardType="email-address"
                            onChangeText={text => setEmail(text)}/>
                        <TextInput
                            style={{
                                width: ROW_WIDTH,
                                height: 50,
                                marginTop: 20,
                                borderColor: APPS_COLOR,
                                borderWidth: 1,
                            }}
                            value={name}
                            placeholder="Name"
                            onChangeText={text => setName(text)}/>
                        <TextInput
                            style={{
                                width: ROW_WIDTH,
                                height: 50,
                                marginTop: 20,
                                borderColor: APPS_COLOR,
                                borderWidth: 1,
                            }}
                            value={phone}
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                            onChangeText={text => setPhone(text)}/>
                        <TextInput
                            style={{
                                width: ROW_WIDTH,
                                height: 50,
                                marginTop: 20,
                                borderColor: APPS_COLOR,
                                borderWidth: 1,
                            }}
                            value={country}
                            placeholder="Country"
                            onChangeText={text => setCountry(text)}/>
                        <TouchableOpacity
                            style={{marginTop: 10, width: ROW_WIDTH, backgroundColor: APPS_COLOR}}
                            onPress={() => {
                                setModal(false);
                                setLoading(true);
                                axios({
                                    method: 'post',
                                    url: POST_URL,
                                    headers: {'Authorization': authHeader},
                                    data: {
                                        'email_address': email,
                                        'status': 'subscribed',
                                        'merge_fields': {
                                            'NAME': name,
                                            'PHONE': phone,
                                            'COUNTRY': country,
                                        },
                                    },
                                }).then(function (response) {
                                  ToastAndroid.show("Subscribe Success", ToastAndroid.SHORT);
                                }).catch(error => {
                                  ToastAndroid.show(error.response.data.title, ToastAndroid.SHORT);

                                }).then(() => {
                                    setLoading(false);
                                });
                            }}>
                            <Text style={{
                                fontSize: 16,
                                backgroundColor: APPS_COLOR,
                                padding: 5,
                                color: '#fff',
                                textAlign: 'center',
                            }}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Image
                    width={ROW_WIDTH/1.5}
                    source={LOGO}
                />
                <Text style={{fontFamily: 'Poppins_600SemiBold',color:"#fff",fontSize:24,marginTop:15,marginBottom:0,textAlign:'center'}}>Coming Soon</Text>
                <Text style={{fontFamily: 'Karla_400Regular',color:"#fff",fontSize:14,textAlign:'center'}}>Launching December 2020</Text>
                <Card/>
                <Text style={{fontFamily: 'Poppins_600SemiBold',color:"#fff",fontSize:16,textAlign:'center'}}>Sign up today for</Text>
                <Text style={{fontFamily: 'Poppins_600SemiBold',color:"#fff",fontSize:16,textAlign:'center'}}>early access</Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', margin: 20, borderRadius: 10}}
                    onPress={() => {
                        setModal(true);
                    }}
                >
                    <Text style={{color:"#000",padding: 5,paddingLeft:10,paddingRight:10,fontSize:12,fontFamily: 'Poppins_600SemiBold'}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        Linking.canOpenURL(URL).then(supported => {
                            if (supported) {
                                Linking.openURL(URL);
                            } else {
                                ToastAndroid.show("Browser can't open this url", ToastAndroid.SHORT);
                            }
                        });
                    }}
                    style={{bottom: 40, position: 'absolute',width:DISPLAY_WIDTH,backgroundColor:"#666"}}>
                    <Text style={{textTransform:"uppercase",color:"#fff",textAlign: "center",fontSize:16,fontFamily: 'Poppins_600SemiBold',padding:3}}>www.qazista.com</Text>
                </TouchableOpacity>
                <Loading loading={loading}/>
            </SafeAreaView>
        </>
    );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: APPS_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
