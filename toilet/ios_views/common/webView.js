/**
 * WebView组件
 * 功能：传入一个地址，展示该地址效果
 * 需要的组件：Text,View,StyleSheet,WebView
 * 外部传入内容：地址path
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    WebView
} from 'react-native';

var WebTest=React.createClass({
    getInitialState:function () {
        return{
            isShowError:false,
            url:this.props.url
        }
    },
    _onError:function () {
        this.setState({
            isShowError:true
        })
    },
    render:function () {
        return(
            <View style={styles.container}>
                {
                    this.state.isShowError
                            ?
                        <View style={styles.errView}>
                            <Text style={styles.errorText}>网络请求出错，请查看链接地址是否正确，或进行正确的网络设置</Text>
                        </View>
                            :
                    <WebView
                        source={{uri:this.state.url}}
                        onError={this._onError}
                        startInLoadingState={true}//自带loading
                    />
                }
            </View>
        )
    }
});

var styles=StyleSheet.create({
    container:{
        flex:1
    },
    errView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errText: {
        color: 'red',
        fontSize: 16,
        margin: 30
    }
})


module.exports=WebTest;