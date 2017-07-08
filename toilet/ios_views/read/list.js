/**
 * Created by lanou on 2017/6/21.
 */

/*
 * 功能：根据外部传入的类型，拼凑成不同的请求数据地址，并请求数据，拿到数据后产生列表，点击列表项跳入详情页
 * 需要的组价：View、StyleSheet、TouchableOpacity、Text、Image、ListView、WebTest、Util
 * 外部传入的内容:type(列表的类型)
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

var TWebView = require('../common/webView')
var Util = require('../common/util')

var Row = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data
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
    render: function () {
        var data = this.state.data
        return (
            <TouchableOpacity style={styles.item} onPress={this.showDetails.bind(this,data.title,data.url)}>
                <Image source={{uri: data.img}} style={styles.img}/>
                <View style={styles.right}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.time}>{data.time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
})

var List = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        return {
            type: this.props.type,
            dataSource: ds
        }
    },
    _renderRow: function (rowData) {
        return  <Row data={rowData} navigator={this.props.navigator}/>
    },
    render: function () {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        )
    },
    componentDidMount: function () {
        var path = "http://123.57.39.116:3000/data/read?type=" + this.state.type;
        Util.getData(path, function (res) {
            console.log(res)
            var ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
            this.setState({
                dataSource: ds.cloneWithRows(res.data)
            })
        }.bind(this), function (err) {
            console.log(err)
            alert('网络请求出错，请稍后重试')
        })
    }
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    item: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center'
    },
    img: {
        width: 51,
        height: 73
    },
    right: {
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5c5c5c',
        marginTop: 5
    },
    time: {
        fontSize: 14,
        fontWeight: '500',
        color: '#7e7e7e',
        marginTop: 3
    }
})

module.exports = List