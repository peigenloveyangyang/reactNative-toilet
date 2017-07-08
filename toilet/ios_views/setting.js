/**
 * Created by lanou on 2017/6/21.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    NavigatorIOS,
    ScrollView,
} from 'react-native';

var Hr=React.createClass({
    render:function () {
        return(
            <View style={styles.hr}></View>
        )
    }
})

var SettingMain = React.createClass({
    jumpTo1:function () {
        var nextRoute={
            title:"功能介绍",
            component:SettingChild1,
        }
        this.props.navigator.push(nextRoute);
    },
    jumpTo2:function () {
        var nextRoute={
            title:"帮助中心",
            component:SettingChild2,
        }
        this.props.navigator.push(nextRoute);
    },
    jumpTo3:function () {
        var nextRoute={
            title:"服务条款",
            component:SettingChild3,
        }
        this.props.navigator.push(nextRoute);
    },
    jumpTo4:function () {
        var nextRoute={
            title:"关于",
            component:SettingChild4,
        }
        this.props.navigator.push(nextRoute);
    },
    render: function () {
        return (
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <View style={styles.border}>
                        <Image style={styles.img} source={require("../image/旅游厕所.png")} />
                    </View>
                    <Text style={styles.font2}>v1.0.0</Text>
                </View>
                <Hr/>
                <TouchableOpacity onPress={this.jumpTo1}><Text style={styles.font}>功能介绍</Text></TouchableOpacity>
                <Hr/>
                <TouchableOpacity onPress={this.jumpTo2}><Text style={styles.font}>帮助中心</Text></TouchableOpacity>
                <Hr/>
                <TouchableOpacity onPress={this.jumpTo3}><Text style={styles.font}>服务条款</Text></TouchableOpacity>
                <Hr/>
                <TouchableOpacity onPress={this.jumpTo4}><Text style={styles.font}>关于</Text></TouchableOpacity>
                <Hr/>
            </View>
        )
    }
})

var SettingChild1=React.createClass({
    render:function () {
        return(
            <View style={[styles.container,{marginTop:70}]}>
                <Text style={styles.font3}>
                    本产品非常适合在您开车腾不出手、出门在外尿急等情况下使用。
                </Text>
                <Text style={styles.font3}>
                    相比于其他导航类软件，此款应用只要点一下，就能马上列出附近厕所。
                </Text>
                <Text style={styles.font3}>
                    不仅如此，应用的内部操作也极其便捷。
                </Text>
                <Text style={styles.font3}>
                    远离繁琐，一触即达！
                </Text>
            </View>
        )
    }
});
var SettingChild2=React.createClass({
    render:function () {
        return(
            <View style={[styles.container,{marginTop:70}]}>
                <Text style={styles.font3}>
                    客服：18375327896
                </Text>
            </View>
        )
    }
});
var SettingChild3=React.createClass({
    render:function () {
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.font3}>
                    1、服务条款的确认和接纳
                    本网站及APP的各项内容和服务的所有权归本公司拥有。用户在接受本服务之前，请务必仔细阅读本条款。用户使用服务，或通过完成注册程序，表示用户接受所有服务条款。

                    2、用户同意：
                    (1) 提供及时、详尽及准确的个人资料。
                    (2) 不断更新注册资料、符合及时、详尽、准确的要求。
                    如果用户提供的资料不准确，本网站有结束服务的权利。
                    本网站及APP将不公开用户的姓名、地址、电子邮箱、帐号和电话号码等信息（请阅隐私保护条款）。
                    用户在本网站和APP的任何行为必须遵循：
                    (1) 传输资料时必须符合中国有关法规。
                    (2) 使用信息服务不作非法用途和不道德行为。
                    (3) 不干扰或混乱网络服务。
                    (4) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。

                    3、服务条款的修改
                    本网站及APP有权在必要时修改条款，将会在页面公布。
                    如果不接受所改动的内容，用户可以主动取消自己的会员资格。如果您不取消自己的会员资格，则视为接受服务条款的变动。

                    4、 用户的帐号、密码和安全性
                    一旦成功注册成为会员，您将有一个密码和用户名。
                    用户将对用户名和密码的安全负全部责任。另外，每个用户都要对以其用户名进行的所有活动和事件负全责。您可以随时改变您的密码。
                    用户若发现任何非法使用用户帐号或存在安全漏洞的情况，请立即通告本公司。

                    5、拒绝提供担保
                    用户明确同意使用本公司服务，由用户个人承担风险。
                    本网站及APP不担保服务一定满足用户的要求，也不担保服务不会中断，对服务的及时性、安全性、出错发生都不作担保。
                    用户理解并接受：任何通过服务取得的信息资料的可靠性有用性取决于用户自己的判断，用户自己承担所有风险和责任。

                    6、有限责任
                    本网站及APP对任何由于使用服务引发的直接、间接、偶然及继起的损害不负责任。
                    这些损害可能来自（包括但不限于）：不正当使用服务，或传送的信息不符合规定等。

                    7、对用户信息的存储和限制
                    本网站及APP不对用户发布信息的删除或储存失败负责，本公司有判定用户的行为是否符合服务条款的要求和精神的保留权利。如果用户违背了服务条款的规定，有中断对其提供服务的权利。

                    8、结束服务
                    本网站及APP可随时根据实际情况中断一项或多项服务，不需对任何个人或第三方负责或知会。
                    同时用户若反对任何服务条款的建议或对后来的条款修改有异议，或对服务不满，用户可以行使如下权利：
                    (1) 不再使用本公司的服务。
                    (2) 通知本公司停止对该用户的服务。

                    9、信息内容的所有权
                    本公司的信息内容包括：文字、软件、声音、相片、录象、图表；以及其它信息，所有这些内容受版权、商标、标签和其它财产所有权法律的保护。
                    用户只能在授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。

                    9、隐私保护条款
                    本网站及APP将严格保守用户的个人隐私，承诺未经过您的同意不将您的个人信息任意披露。
                    但在以下情形下，我们将无法再提供您前述保证而披露您的相关信息。这些情形包括但不限于：
                    * 为了您的交易顺利完成，我们不得不把您的某些信息，如您的姓名、联系电话、e-mail等提供给相关如物流服务方，以便于他们及时与您取得联系，提供服务。
                    * 当您在本网站的行为违反的服务条款，或可能损害他人权益或导致他人遭受损害，只要我们相信披露您的个人资料是为了辨识、联络或采取法律行动所必要的行动时。
                    * 法律法规所规定的必须披露或公开的个人信息。
                    * 当司法机关或其它有权机关依法执行公务，要求提供特定个人资料时，我们必须给予必要的配合。

                    10、适用法律
                    上述条款将适用中华人民共和国的法律，所有的争端将诉诸于本网所在地的人民法院。
                    如发生服务条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它条款则依旧保持约束力。
                </Text>
            </ScrollView>
        )
    }
});
var SettingChild4=React.createClass({
    render:function () {
        return(
            <View style={[styles.container,{marginTop:70}]}>
                <Text style={styles.font3}>
                    最新版本
                </Text>
            </View>
        )
    }
});

var Setting = React.createClass({
    render:function () {
        //初始路由
        var rootRoute = {
            title:"返回",
            component:SettingMain,
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
        flex: 1,
    },
    wrap:{
        justifyContent:"center",
        alignItems:"center",
        height:250
    },
    border:{
        width:110,
        height:110,
        borderWidth:1,
        borderColor:"#7e7e7e",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:3,
        marginTop:100
    },
    img:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:"#7e7e7e",
        borderRadius:3
    },
    font:{
        fontSize:22,
        fontWeight:"bold",
        paddingLeft:20,
        color:"#7e7e7e",
    },
    font2:{
        fontSize:18,
        fontWeight:"bold",
        color:"#7e7e7e",
        marginTop:20
    },
    font3:{
        fontSize:16,
        color:"black",
        marginTop:10,
    },
    hr:{
        height:1,
        backgroundColor:"#ccc",
        marginTop:20,
        marginBottom:20
    }
})

module.exports = Setting