import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, Alert, CheckBox} from 'react-native';

import global from '../style/global';
import home from '../style/home';
import friend from '../style/friend';

import FriendContainer from '../components/PersonContainer';
import PersonNotify from '../components/PersonNotify';
import OptionsButton from '../components/optionButton';
import Floating from '../components/ButtonFloat';

import Icon from 'react-native-vector-icons/AntDesign';


import Buttom from '../components/Button';
import UserLogin from '../components/UserLogin';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



export default class loginScreen extends Component{

    state={
        buttonText: 'Entrar'
    }

    AllFriends = () => {
        //Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('friend');
    }
    ArquiveFriends = () => {
        //Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('arquiveFriend');
    }
    sair = () => {
        //Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('login');
    }

    emBreve = () => {
        Alert.alert("Friend.io", "Coming soon...");
    }


    render(){
        return(
        
        <SafeAreaView style={home.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="#5bc4f5"/>
          
            <View style={global.head}>
                <Text style={[friend.title, {marginLeft: 10}]}>Conversas</Text>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.emBreve}><Icon name="search1" color="white" size={20} /></TouchableOpacity>
                <OptionsButton style={global.headOption} opcoes={[ "Friends", "Arquived","Settings", "Exit"]} acoes={[ this.AllFriends,this.ArquiveFriends,this.emBreve, this.sair]} />
                
            </View>
                
            </View>  
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[home.Body]}>
               
                        <View style={home.recentsContent}>
                        <PersonNotify number={4}/></View>  

                </View> 
                <View style={home.Body}>
                    <View style={home.recentsContent}>
                        <FriendContainer number={7}/></View>  

                </View> 

                
            </ScrollView>
            <Floating name="message1" onPress={this.AllFriends} />
            
        </SafeAreaView>
      
    );
  }
}

