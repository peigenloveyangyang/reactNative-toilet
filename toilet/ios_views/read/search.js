
/**
 * 这是一个搜索
 * 功能：实现搜索，在点击软键盘的search进入关于分类中互联网的列表
 * 需要的组件View,StyleSheet,TextInput,Text,
 * 外部传入的内容:navigator
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

var List=require("./list")
var SearchBar = React.createClass({
    showList:function () {
        this.props.navigator.push({
            title:"互联网",
            component:List,
            passProps:{
                type:"it"
            }
        })
    },
    render: function () {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={"搜索"}
                    placeholderTextColor={"#5c5c5c"}
                    returnKeyType={"search"}//软键盘设置
                    onSubmitEditing={this.showList}
                />
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft:10,
        paddingRight:10
    },
    input:{
        height:35,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:5,
        paddingLeft:10//placeholders的文字位置调整
    }
})

module.exports = SearchBar