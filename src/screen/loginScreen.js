import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, Alert, CheckBox} from 'react-native';

import global from '../style/global';
import login from '../style/login';
import friend from '../style/friend';

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
        this.props.navigation.navigate('home');
    }


    render(){
        return(
        
        <SafeAreaView style={login.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="#6dcffc"/>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={require('../assets/logo.png')} style={login.image}/>
             <Text style={login.title}>O seu app de conversas</Text> 
            <View style={login.Body}>  
                  
                 
                    <UserLogin />
                    <Buttom texto="Entrar" back="#222" onPress={this.entrar} />

                    <TouchableOpacity style={login.loginContentOption}>
                       
                        <View style={{borderRadius:100, width: 60, height:60, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name="user" size={35} color="black"/>
                        </View>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 20}}>
                            <Text style={friend.friendName}>Criar conta</Text>
                            <Text style={[friend.email, {fontFamily: 'Poppins-Italic', fontSize: 12}]}>Registre-se agora</Text>
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={login.loginContentOption}>
                       
                        <View style={{borderRadius:100, width: 60, height:60, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name="retweet" size={35} color="black"/>
                        </View>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 20}}>
                            <Text style={friend.friendName}>Trocar de conta</Text>
                            <Text style={[friend.email, {fontFamily: 'Poppins-Italic', fontSize: 12}]}>Esta não é sua conta?</Text>
                            </View>
                    </TouchableOpacity>

                    
                
            </View> 
            </ScrollView>
        </SafeAreaView>
      
    );
  }
}

