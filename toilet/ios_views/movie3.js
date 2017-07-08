
/*
 *fetch
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    ActivityIndicator,//加载组件
    NavigatorIOS,
    TouchableOpacity,
    TextInput
} from 'react-native';

var Util=require("./common/util");
var SearchBar=require("./movie/searchBar");
var Row=require("./movie/row");

var Movie = React.createClass({
    getInitialState:function () {
        var ds=new ListView.DataSource({
            rowHasChanged:function(oldRow,newRow){
                return oldRow!==newRow
            }
        });
        return{
            keyWords:"哈利波特",
            isShowLoading:true,
            dataSource:ds
        }
    },
    changeKeyWords:function (text) {
        this.setState({
            keyWords:text
        })
    },
    movieSearch:function () {
      // alert(this.state.keyWords)
        this.getData()
    },
    _renderRow:function () {
        return <Row data={rowData}/>
    },
    render:function () {
        return(
            <View style={styles.container}>
                <SearchBar
                    onSubmitEditing={this.movieSearch}
                    onChangeText={this.changeKeyWords}
                    onPress={this.movieSearch}/>
                {
                    this.state.isShowLoading
                        ?
                        Util.loading
                        :
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                }
            </View>
        )
    },
    getData:function () {
        this.setState({
            isShowLoading:true
        });
        var path="https://api.douban.com/v2/movie/search?count=20&q="+this.state.keyWords;
        Util.getData(path,function (data) {
            console.log(data)
            if(!data.subjects||data.subjects.length==0){
                return alert("未查询到相关数据")
            }
            var ds=new ListView.DataSource({
                rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
            });
            this.setState({
                isShowLoading:false,
                dataSource:ds.cloneWithRows(data.subjects)
            })
        }.bind(this),function (err) {
            console.log(err);
            alert("网络请求出错")
        })
    },
    componentDidMount:function () {
        this.getData()
    }

})

var styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
    },
});

module.exports=Movie;

