import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, Alert, CheckBox} from 'react-native';

import global from '../style/global';
import home from '../style/home';
import friend from '../style/friend';

import FriendContainer from '../components/PersonContainer';
import PersonNotify from '../components/PersonNotify';

import Icon from 'react-native-vector-icons/AntDesign';


import Buttom from '../components/Button';
import UserLogin from '../components/UserLogin';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class loginScreen extends Component{

    state={
        buttonText: 'Entrar'
    }

    entrar = () => {
        //Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('friend');
    }
    sair = () => {
        //Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('login');
    }


    render(){
        return(
        
        <SafeAreaView style={home.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="#5bc4f5"/>
          
            <View style={home.head}>
                <TouchableOpacity onPress={this.sair} style={[home.headOptiont, {alignItems: 'flex-start'}]}>  
                    <Icon name="arrowleft" color="white" size={30} />
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={home.headOption}>
                    <Icon name="inbox" color="white" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={home.headOption}>
                    <Icon name="setting" color="white" size={30} />
                </TouchableOpacity></View>
                
            </View>  
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[home.Body, {marginTop:20}]}>
                <View style={home.titleContent}><Text style={{color: '#fafafa', fontFamily: 'Poppins-Bold', fontSize:17}}><Icon name="notification" color="white" size={20} />  Notificações (2)</Text></View>
                        <View style={home.recentsContent}>
                        <PersonNotify number={2}/></View>  
                        <Buttom texto="Ver todas..." back="darkblue" />

                </View> 
                <View style={home.Body}>
                <View style={home.titleContent}><Text style={{color: '#fafafa', fontFamily: 'Poppins-Bold', fontSize:17}}>Conversas recentes</Text></View>
                        <View style={home.recentsContent}>
                        <FriendContainer number={6}/></View>  
                        <Buttom texto="Todos os amigos" back="#222" onPress={this.entrar} />

                </View> 

                <View style={home.Body}>
                <View style={home.titleContent}><Text style={{color: '#fafafa', fontFamily: 'Poppins-Bold', fontSize:17}}>Conversas antigas</Text></View>
                        <View style={home.recentsContent}>
                        <FriendContainer number={6}/></View>  
                        <Buttom texto="Arquivar" back="orange" />

                </View> 
            </ScrollView>
        </SafeAreaView>
      
    );
  }
}

