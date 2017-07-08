/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

var Map = require("./ios_views/map");
var Read = require("./ios_views/read");
var Movie = require("./ios_views/movie");
var Setting = require("./ios_views/setting");

var Toilet=React.createClass({
    getInitialState:function () {
        return{
            selectedTab:'movie'
        }
    },
    changeTab:function (tabName) {
        this.setState({
            selectedTab:tabName
        })
    },
    render:function () {
        return(
            <TabBarIOS>
                <TabBarIOS.Item
                    title="卫生间"
                    icon={require("./image/厕所.png")}
                    selected={this.state.selectedTab=="toilet"}
                    onPress={this.changeTab.bind(this,"toilet")}
                >
                    <Map/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="阅读"
                    icon={require("./image/书.png")}
                    selected={this.state.selectedTab=="read"}
                    onPress={this.changeTab.bind(this,"read")}
                >
                    <Read/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="电影"
                    icon={require("./image/视频.png")}
                    selected={this.state.selectedTab=="movie"}
                    onPress={this.changeTab.bind(this,"movie")}
                >
                    <Movie/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="设置"
                    icon={require("./image/设置.png")}
                    selected={this.state.selectedTab=="setting"}
                    onPress={this.changeTab.bind(this,"setting")}
                >
                    <Setting/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
})

AppRegistry.registerComponent('toilet', () => Toilet);
