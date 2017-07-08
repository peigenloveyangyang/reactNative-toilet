
/**
 * 功能：展示推荐专题的内容，包括图片展示，点击图片，跳转到图文详情页，点击下部查看同期专题按钮，进入分类中的管理列表页
 * 需要的组件View,StyleSheet,TouchableOpacity,Text,Image
 * 外部传入的内容:navigator，data(推荐专题的数据)
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Util=require("../common/util");
var TWebView=require("../common/webView");
var List=require("./list");

var Recommend = React.createClass({
    getInitialState:function () {
      return  {
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
          title:"管理",
          passProps:{
              type:"manager"
          }
      })
    },
    render: function () {
        var data=this.state.data;
        console.log(data);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>推荐专题</Text>
                <View style={styles.imgWrap}>
                    <TouchableOpacity onPress={this.showDetails.bind(this,data[0].title,data[0].url)}>
                        <Image style={styles.img} source={{uri:data[0].img}}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.showDetails.bind(this,data[1].title,data[1].url)}>
                        <Image style={[styles.img,{marginRight:0}]} source={{uri:data[1].img}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.showList}>
                    <Text style={styles.more}>查看同期专题&gt;</Text>
                </TouchableOpacity>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        paddingLeft:10,
        paddingRight:10,
    },
    title:{
        fontSize:17,
        fontWeight:"bold",
        color:"#5c5c5c"
    },
    imgWrap:{
        flexDirection:"row",
        marginTop:5,
        marginBottom:5
    },
    img:{
        width:(Util.windowSize.width-30)/2,
        height:80,
        marginRight:10
    },
    more:{
        fontSize:15,
        fontWeight:"300",
        color:"#7d7d7d"
    }
})

module.exports = Recommend;