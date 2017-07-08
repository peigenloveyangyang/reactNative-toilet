/**
 * 导入read组件
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
    RefreshControl,//刷新
} from 'react-native';

var SearchBar=require("./read/search");
var Recommend=require("./read/recommend");
var Topic=require("./read/topic");
var Category=require("./read/category");
var Util=require("./common/util");

//封装线
var Hr=React.createClass({
    render:function () {
        return(
            <View style={styles.hr}></View>
        )
    }
})

var Read = React.createClass({
    getInitialState:function () {
      return{
          recommendTopic:null,
          hotTopic:null,
          category:null,
          other:null,
          isShowLoading:true,
      }
    },
    //重新刷新
    _onRefresh(){
        this.getData()
    },
    render: function () {
        return (
            <View style={styles.container}>
                <SearchBar navigator={this.props.navigator}/>
                <Hr/>
                {
                    this.state.isShowLoading?
                        Util.loading
                        :
                        <ScrollView
                            style={{marginBottom:50}}
                            refreshControl={
                                <RefreshControl
                                    title={"下拉刷新"}
                                    refreshing={false}
                                    onRefresh={this._onRefresh}
                                />
                            }
                        >
                            <Recommend navigator={this.props.navigator} data={this.state.recommendTopic}/>
                            <Hr/>
                            <Topic navigator={this.props.navigator} data={this.state.hotTopic} title="热门专题" type="it"/>
                            <Hr/>
                            <Category navigator={this.props.navigator} data={this.state.category}/>
                            <Hr/>
                            <Topic navigator={this.props.navigator} data={this.state.other} title="清新一刻" type="sanwen"/>
                        </ScrollView>
                }
            </View>
        )
    },
    getData:function () {
        this.setState({
            isShowLoading:true
        })
        var path="http://123.57.39.116:3000/data/read?type=config";
        Util.getData(path,function (res) {
            console.log(res)
            this.setState({
                isShowLoading:false,
                recommendTopic:res.data.recommendTopic,
                hotTopic:res.data.hotTopic,
                category:res.data.category,
                other:res.data.other
            })
        }.bind(this),function (err) {
            console.log(err);
            alert("网络请求出错，请稍后重试")
        })
    },
    componentDidMount:function () {
        this.getData();//加载时调用
    }
});

var ReadNav=React.createClass({
    render:function () {
        return(
            <View style={styles.container}>
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                        title:"阅读",
                        component:Read,
                        navigationBarHidden:true
                    }}
                />
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hr:{
        height:1,
        backgroundColor:"#ccc",
        marginTop:10,
        marginBottom:10
    }
})

module.exports = ReadNav