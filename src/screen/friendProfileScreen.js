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
                </View>
                
            </View>  
            <ScrollView showsVerticalScrollIndicator={false}>
            
            </ScrollView>
        </SafeAreaView>
      
    );
  }
}

