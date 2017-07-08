
/*
 *fetch
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ListView,
    ActivityIndicator,//加载组件
    NavigatorIOS,
    TouchableOpacity,
    TextInput
} from 'react-native';

var url="https://api.douban.com/v2/movie/in_theaters";

var FirstPage = React.createClass({
    getInitialState:function () {
        //实例化DataSource
        var ds = new ListView.DataSource({
            //是否更新列表1
            // rowHasChanged:function (oldData,newData) {
            //     return oldData !== newData
            // }

            //是否更新列表2-ES6
            rowHasChanged:(oldData,newData)=>oldData !== newData

        })
        return{
            //克隆数据源
            // dataSource:ds.cloneWithRows(movies)
            dataSource:ds,
            isShow:false,
            text:""
        }
    },
    jumpToNext:function () {
        var nextRoute={
            title:"相关电影",
            component:SecondPage,
            //传递的参数
            passProps:{
                text:this.state.text,
                name:"张三"
            }
        }
        this.props.navigator.push(nextRoute);
    },
    changeText:function (text) {
        this.setState({
            text:text
        })
    },
    getData:function () {
        this.setState({
            isShow:true
        })
        fetch(url)
            .then((res)=> res.json())//拿到结果
            .then((resJson)=>{
                console.log(resJson);
                var ds = new ListView.DataSource({
                    rowHasChanged:(oldData,newData)=>oldData !== newData
                });
                this.setState({
                    isShow:false,
                    dataSource:ds.cloneWithRows(resJson.subjects)
                })
            })//解析
            .catch((err)=>{
                console.log(err);
            })//抓取错误
    },
    //调取方法
    componentDidMount:function () {
        this.getData();
    },
    _renderHeader:function () {
        return(
            <View style={styles.head}>
                <TextInput
                    onChangeText={this.changeText}
                    style={styles.input}
                    placeholder={"传递到下一页的参数"}
                />
                <TouchableOpacity onPress={this.jumpToNext} style={styles.btn}>
                    <Text style={styles.font2}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    },
    _renderRow:function (rowData) {
        //返回列表中每项的结构
        return(
            <View style={styles.row}>
                <Image
                    style={styles.img}
                    source={{uri:rowData.images.medium}}/>
                <View style={styles.right}>
                    <Text style={styles.font}>名称：{rowData.title}</Text>
                    <Text style={styles.font}>演员：{rowData.casts[0].name}</Text>
                    <Text style={styles.font}>评分：{rowData.rating.average}</Text>
                    <Text style={styles.font}>时间：{rowData.year}</Text>
                    <Text style={styles.font}>标签：{rowData.genres}</Text>
                </View>
            </View>
        )
    },
    render:function () {
        return(
            <View style={styles.container}>
                {
                    this.state.isShow
                        ?
                        <ActivityIndicator size={"large"} style={{marginTop:200}}/>
                        :
                        <ListView
                            dataSource={this.state.dataSource}//数据源
                            renderRow={this._renderRow}//_renderRow中的方法rowData就是movies的一条数据
                            renderHeader={this._renderHeader}
                            // renderSeparator={this._renderSeparator}
                        />

                }
            </View>
        )
    }
});



var SecondPage=React.createClass({

    getInitialState:function () {
        //实例化DataSource
        var ds = new ListView.DataSource({
            //是否更新列表1
            // rowHasChanged:function (oldData,newData) {
            //     return oldData !== newData
            // }

            //是否更新列表2-ES6
            rowHasChanged:(oldData,newData)=>oldData !== newData

        })
        return{
            //克隆数据源
            // dataSource:ds.cloneWithRows(movies)
            dataSource:ds,
            isShow:false,
            text:""
        }
    },
    getData:function () {
        this.setState({
            isShow:true
        })
        fetch("https://api.douban.com/v2/movie/search?q="+this.props.text)
            .then((res)=> res.json())//拿到结果
            .then((resJson)=>{
                console.log(resJson);
                var ds = new ListView.DataSource({
                    rowHasChanged:(oldData,newData)=>oldData !== newData
                });
                this.setState({
                    isShow:false,
                    dataSource:ds.cloneWithRows(resJson.subjects)
                })
            })//解析
            .catch((err)=>{
                console.log(err);
            })//抓取错误
    },
    //调取方法
    componentDidMount:function () {
        this.getData();
    },
    _renderRow:function (rowData) {
        //返回列表中每项的结构
        return(
            <View style={styles.row}>
                <Image
                    style={styles.img}
                    source={{uri:rowData.images.medium}}/>
                <View style={styles.right}>
                    <Text style={styles.font}>名称：{rowData.title}</Text>
                    <Text style={styles.font}>演员：{rowData.casts[0].name}</Text>
                    <Text style={styles.font}>评分：{rowData.rating.average}</Text>
                    <Text style={styles.font}>时间：{rowData.year}</Text>
                    <Text style={styles.font}>标签：{rowData.genres[0]}</Text>
                </View>
            </View>
        )
    },
    render:function () {
        return(
            <View style={[styles.container,{marginTop:70}]}>
                {
                    this.state.isShow
                        ?
                        <ActivityIndicator size={"large"} style={{marginTop:200}}/>
                        :
                        <ListView
                            dataSource={this.state.dataSource}//数据源
                            renderRow={this._renderRow}//_renderRow中的方法rowData就是movies的一条数据
                        />
                }
            </View>
        )
    }
});

var Movie = React.createClass({
    render:function () {
        //初始路由
        var rootRoute = {
            title:"返回",
            component:FirstPage,
            navigationBarHidden:true//隐藏导航条-当前隐藏

        }
        return(
            <View style={{flex:1}}>
                <NavigatorIOS
                    style={{flex:1}}
                    initialRoute={rootRoute}
                    barTintColor={"white"}
                    tintColor={"sky"}
                    titleTextColor={"black"}
                />
            </View>
        )
    }
})


var styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
    },
    head:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
    },
    btn:{
        height:35,
        borderWidth:1,
        borderColor:"cyan",
        borderRadius:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"cyan",
        flex:2,
        marginLeft:5,
        marginRight:5
    },
    font2:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"
    },
    input:{
        borderWidth:1,
        borderColor:"#eee",
        height:35,
        flex:8,
        marginLeft:5,
        marginRight:5,
        paddingLeft:7
    },
    row:{
        flexDirection:"row",
        padding:10,
        alignItems:"center",
        borderBottomWidth:2,
        borderColor:"#ccc"
    },
    img:{
        width:110,
        height:150,
        backgroundColor:"#ff8284"
    },
    right:{
        marginLeft:12,
    },
    font:{
        color:"black",
        marginTop:12,
        marginBottom:12,
        fontSize:18,
    },
    header:{
        height:45
    },
    title:{
        fontSize:30,
        textAlign:"center",
        lineHeight:45
    }
});

module.exports=Movie;

