import React from 'react';
import {Text,View} from 'react-native';
import {CARD_IMG,ROW_WIDTH, DISPLAY_WIDTH, LOGO} from './Const';
import Image from 'react-native-scalable-image';
const Card = (): Node => (
    <View>
        <Image
            width={ROW_WIDTH}
            style={{
                padding:10,
                alignSelf:"center"
            }}
            source={CARD_IMG}
        />
        <Text style={{fontWeight:"bold",color:"#fff",fontSize:16,textAlign:'center'}}>Sing up tody for</Text>
        <Text style={{fontWeight:"bold",color:"#fff",fontSize:16,textAlign:'center'}}>early access</Text>
    </View>

);
export default Card;
