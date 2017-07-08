/**
 * Created by lanou on 2017/6/21.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

var WebTest=require("./common/webView")
var Map = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <WebTest url="http://5iyangyang.com/assets/map/map.html"></WebTest>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
    }
});

module.exports = Map;