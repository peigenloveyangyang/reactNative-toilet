
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

var SearchBar=React.createClass({
    render:function () {
        return(
            <View style={styles.container}>
                <TextInput
                    {...this.props}
                    style={styles.input}
                    placeholder={"请输入电影名称"}
                    placeholderTextColor={"#5c5c5c"}
                    returnKeyType={"search"}
                />
                    <TouchableOpacity
                        {...this.props}//继承所有属性
                        style={styles.btn}>
                        <Text style={styles.text}>
                            搜索
                        </Text>
                    </TouchableOpacity>
            </View>
        )
    }
});
var styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        height:40,
        marginBottom:10,
        marginTop:25
    },
    input:{
        marginLeft:10,
        flex:1,
        height:44,
        borderWidth:1,
        backgroundColor:"#ccc",
        paddingLeft:5,
        borderRadius:5
    },
    btn:{
        width:55,
        height:44,
        marginLeft:5,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#6dd8ff",
        borderRadius:3
    },
    text:{
        fontSize:15,
        fontWeight:"bold",
        color:"#fff"
    }
});

module.exports=SearchBar;