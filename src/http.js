import Axios from "axios";
import {PASSWORD, USER} from './Const';
import base64 from 'react-native-base64';
const authHeader = 'Basic ' + base64.encode(`${USER}:${PASSWORD}`);
const http={
    getData:(url)=>Axios.get(url),
    postData:(url,data)=>Axios.post(url,data, {
        headers: { 'Authorization': authHeader },
        data: {
            "email_address": "devaefe35@zimble.com",
            "status": "subscribed",
            "merge_fields": {
                "NAME":"taslim hossain",
                "PHONE":"1234567890",
                "COUNTRY":"bangladesh"
            }
        }
    }),
    patchData:(url,data)=>Axios.patch(url,data, {
        headers: {
            Authorization: "Bearer "+token
        }}),
    deleteData:(url)=>Axios.delete(url, {
        headers: {
            Authorization: "Bearer "+token
        }}),
}

export default http;
