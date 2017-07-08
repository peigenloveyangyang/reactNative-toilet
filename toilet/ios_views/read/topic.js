
/**
 * 功能：展示热门话题/清新一刻的内容，包括图片展示，点击图文，跳转到图文详情页，点击下部查看查看更多按钮，进入分类中的互联网或者散文列表页
 * 需要的组件View,StyleSheet,Text,TouchableOpacity,Image
 * 外部传入的内容:navigator,data(推荐专题的数据)，title（专题的名字）,type(List列表的类型)
 */
var TWebView=require("../common/webView");
var List=require("./list");
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

var Topic = React.createClass({
    getInitialState:function () {
        return{
            data:this.props.data
        }
    },
    showDetails:function (title,url) {
        this.props.navigator.push({
            component:TWebView,
            title:title,
            passProps:{//参数传递通过passProps
                url:url
            }
        });
    },
    showList:function () {
        this.props.navigator.push({
            component:List,
            title:this.props.title,
            passProps:{
                type:this.props.type,
            }
        })
    },
    render: function () {
        var data=this.state.data;//数据保存在state
        var first=[];
        var second=[];
        for(var i in data){
            var item=(
                <TouchableOpacity style={styles.item} key={i} onPress={this.showDetails.bind(this,data[i].title,data[i].url)}>
                    <Image style={styles.img} source={{uri:data[i].img}}/>
                    <Text numberOfLines={2}>{data[i].title}</Text>
                </TouchableOpacity>
            )
            if(i<4){
                first.push(item);
            }else{
                second.push(item);
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.listWrap}>
                    <View style={styles.itemWrap}>{first}</View>
                    <View style={styles.itemWrap}>{second}</View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.more} onPress={this.showList}>查看更多&gt;</Text>
                </TouchableOpacity>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        paddingRight:10,
        paddingLeft:10
    },
    title:{
        fontSize:17,
        fontWeight:"bold",
        color:"#5c5c5c"
    },
    listWrap:{
        marginTop:10,
        marginBottom:10
    },
    itemWrap:{
        flexDirection:"row",
        marginBottom:5
    },
    item:{
        flex:1,
        marginRight:10
    },
    img:{
        // width:58,
        height:110,
        borderRadius:2,
        marginBottom:3
    },
    more:{
        fontSize:15,
        fontWeight:"300",
        color:"#7d7d7d"
    }
})

module.exports = Topic