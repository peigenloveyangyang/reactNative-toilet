import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

var MWebView=require("../common/webView");

var Row=React.createClass({
    getInitialState:function () {
       return{
           data:this.props.data
       }
    },
    showDetails:function (title,url) {
        this.props.navigator.push({
            component:MWebView,
            title:title,
            passProps:{//参数传递通过passProps
                url:url
            }
        });
    },
    render:function () {
        var data=this.state.data;
        var actors=[];
        for(var i in data.casts){
            actors.push(data.casts[i].name)
        }
        return(
            <TouchableOpacity style={styles.row} onPress={this.showDetails.bind(this,data.title,data.alt)}>
                <Image style={styles.img} source={{uri:data.images.medium}}/>
                <View style={styles.listWrap}>
                    <View style={styles.textWrap}>
                        <Text numberOfLines={1} style={styles.text}>名称：{data.title}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text numberOfLines={1} style={styles.text}>演员：{actors}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text numberOfLines={1} style={styles.text}>评分：{data.rating.average}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text numberOfLines={1} style={styles.text}>时间：{data.year}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text numberOfLines={1} style={styles.text}>标签：{data.genres}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
})

var styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        padding:10,
        height:200,
        alignItems:"center"
    },
    img:{
        width:80,
        height:110
    },
    listWrap:{
        marginLeft:15,
        flex:1
    },
    textWrap:{
        flex:1,
        justifyContent:"center"
    },
    text:{
        fontSize:14,
        color:"#000"
    }
});

module.exports=Row