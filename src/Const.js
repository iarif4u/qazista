import React from 'react';
import {Dimensions} from 'react-native';
import base64 from 'react-native-base64';
const LOGO = require('./resource/zimble.png');
const CARD_IMG = require('./resource/card.png');
const DISPLAY_WIDTH = Dimensions.get('window').width;
const ROW_WIDTH = Math.round(DISPLAY_WIDTH - DISPLAY_WIDTH / 15);
const LOGO_WIDTH = Math.round(DISPLAY_WIDTH - DISPLAY_WIDTH / 20);
const DISPLAY_HEIGHT = Dimensions.get('window').height;
const URL = 'http://soft.bellboy.shop/api';
const APPS_COLOR = '#84CFEF';
const APPS_BTN_COLOR = '#72b6d4';
const POST_URL='https://us10.api.mailchimp.com/3.0/lists/805dc6741e/members';
const USER='anystring';
const PASSWORD='80aeeda4c483c939c6e26b330c5abfcf-us10';
const authHeader = 'Basic ' + base64.encode(`${USER}:${PASSWORD}`);
export {
    authHeader,
    CARD_IMG,
    POST_URL,
    USER,
    PASSWORD,
    APPS_BTN_COLOR,
    ROW_WIDTH,
    DISPLAY_WIDTH,
    DISPLAY_HEIGHT,
    URL,
    LOGO,
    LOGO_WIDTH,
    APPS_COLOR,
};
