/**
 * Created by lanou on 2017/6/21.
 */

/*
 * 功能：展示阅读的分类，点击不同的分类进入不同分类的详情列表页
 * 需要的组价：View、StyleSheet、TouchableOpacity、Text
 * 外部传入的内容:navigator, data(数据)
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var List = require('./list')

var Category = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data
        }
    },
    showList: function (title) {
        var type = 'it';
        switch (title) {
            case '互联网':
                type = 'it';
                break;
            case '管理':
                type = 'manager';
                break;
            case '散文':
                type = 'sanwen';
                break;
            case '笑话':
                type = 'cookies';
                break;
        };
        this.props.navigator.push({
            title: title,
            component: List,
            passProps: {
                type: type
            }
        })
    },
    render: function () {
        var data = this.state.data;
        var first = [], second = [];
        for (var i in data) {
            var item = (
                <TouchableOpacity key={i} style={styles.item} onPress={this.showList.bind(this, data[i].text)}>
                    <Text>{data[i].text}</Text>
                </TouchableOpacity>
            )
            if(i<2) {
                first.push(item)
            } else {
                second.push(item)
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>分类</Text>
                <View style={styles.listWrap}>
                    <View style={styles.itemWrap}>{first}</View>
                    <View style={styles.itemWrap}>{second}</View>
                </View>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#5c5c5c"
    },
    listWrap: {
        marginTop: 10
    },
    itemWrap: {
        flexDirection: 'row',
        marginBottom: 10
    },
    item: {
        flex: 1,
        height: 70,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
})

module.exports = Category