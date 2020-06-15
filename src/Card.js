import React from 'react';
import {Text,View} from 'react-native';
import {CARD_IMG, ROW_WIDTH, DISPLAY_WIDTH, LOGO, CARD_WIDTH} from './Const';
import Image from 'react-native-scalable-image';
const Card = ()=> (
    <View>
        <Image
            width={CARD_WIDTH}
            style={{
                margin:20,
                marginLeft:'15%',
                alignSelf:"center"
            }}
            source={CARD_IMG}
        />
    </View>

);
export default Card;
