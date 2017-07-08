/**
 * Created by lanou on 2017/6/21.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    NavigatorIOS,
} from 'react-native';


var Util = require('./common/util')
var SearchBar = require('./movie/searchBar')
// var url = 'https://api.douban.com/v2/movie/top250';
var Row = require('./movie/row')

var Movie = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: function (oldRow, newRow) {
                return oldRow !== newRow
            }
        })
        return {
            keyWords: '哈利波特',
            isShowLoading: true,
        }
    },
    _renderRow:function (rowData) {
        return(
            <Row navigator={this.props.navigator} data={rowData}></Row>
        )
    },
    movieSearch: function () {
        // alert(this.state.keyWords)
        this.getData();
    },
    changeKeyWords: function (text) {
        this.setState({
            keyWords: text
        })
    },
    render: function () {
        return (
            <View style={styles.container}>
                <SearchBar
                    onPress={this.movieSearch}
                    onChangeText={this.changeKeyWords}
                    onSubmitEditing={this.movieSearch}></SearchBar>
                {
                    this.state.isShowLoading ? Util.loading :
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                }
            </View>
        )
    },
    getData: function () {
        this.setState({
            isShowLoading: true
        })
        var path = 'https://api.douban.com/v2/movie/search?count=20&q=' + this.state.keyWords;
        Util.getData(path, function (data) {
            console.log(data);
            if(!data.subjects || data.subjects.length == 0) {
                return  alert("未查询到相关数据")
            }
            var ds = new ListView.DataSource({
                rowHasChanged:(oldRow, newRow) => oldRow !== newRow
            })
            this.setState({
                isShowLoading: false,
                dataSource: ds.cloneWithRows(data.subjects)
            })
        }.bind(this), function (err) {
            console.log(err);
            alert('网络请求出错，请稍后重试')
        })
    },
    componentDidMount: function () {
        this.getData();
    }
})

var MovieNav=React.createClass({
    render:function () {
        return(
            <View style={styles.container}>
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                        title:"电影",
                        component:Movie,
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
        // marginBottom: 50,
    },
    row:{
        flexDirection:"row",
        padding:10,
        alignItems:"center"
    },
    img:{
        width:80,
        height:120,
        backgroundColor:"#ff8284"
    },
    right:{
        marginLeft:10,
    },
    name:{
        fontSize:15,
        fontWeight:"bold",
        marginTop:5
    },
    font:{
        color:"#999",
        marginTop:3
    },
    header:{
        height:45
    },
    title:{
        fontSize:30,
        textAlign:"center",
        lineHeight:45
    },
    hr: {
        height: 1,
        backgroundColor: "#ccc",
        marginTop: 10,
        marginBottom: 10
    }
})

module.exports = MovieNav