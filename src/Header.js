import React from 'react';
import {Image,Text,View} from 'react-native';
import {DISPLAY_WIDTH, ROW_WIDTH,LOGO} from './Const';

const Header = (): Node => (
    <View>
        <Image
            style={{
                width: ROW_WIDTH
            }}
            resizeMode="contain"
            source={LOGO}
        />
        <Text style={{fontWeight:"bold",padding:30,textAlign:'center'}}>"Banking made simple"</Text>
        <Text style={{fontWeight:"bold",color:"#fff",fontSize:20,textAlign:'center'}}>
            Coming Soon
        </Text>
    </View>

);
export default Header;
