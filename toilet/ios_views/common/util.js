/**
 * 工具组件
 * 功能：1.返回设备窗口的宽高，2.封装一个http请求方式，3.loading
 * 需要组件：Dimensions,ActivityIndicator
 * 外部传入内容：请求地址path，请求成功回调succCb，请求失败回调failCb
 */

import React, { Component } from 'react';
import {
    Dimensions,
    ActivityIndicator
} from 'react-native';

var Util={
    windowSize:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    getData:function (path,succCb,failCb) {
        fetch(path)
            .then((res)=>res.json())
            .then((resJson)=>{
                succCb(resJson);
            })
            .catch((err)=>{
                failCb(err);
            })
    },
    loading:<ActivityIndicator size={"large"} style={{marginTop:200}}/>
}


module.exports=Util;