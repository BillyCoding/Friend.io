import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, Alert, CheckBox} from 'react-native';

import global from '../style/global';
import login from '../style/login';


import ButtonRadius from '../components/ButtonRadius';
import Input from '../components/InputText';
import InputPass from '../components/InputPassword';
import { ScrollView } from 'react-native-gesture-handler';

export default class loginScreen extends Component{

    state={
        buttonText: 'Entrar'
    }

    entrar = () => {
        //Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('friend');
    }


    render(){
        return(
        
        <SafeAreaView style={login.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="#6dcffc"/>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/*<Image source={require('../assets/logo.png')} style={login.image}/>*/}
            
            <View style={login.Body}>  
                  <Text style={login.title}>Friend.io</Text> 
                  <Text style={login.subtitle}>O seu app de conversas</Text> 
                
                <Input place='Nome'/>
                <View style={login.check}>
                    <CheckBox checked={this.state.checked}/>
                    <Text>Mantenha-me conectado</Text>
                </View>
                <ButtonRadius texto={this.state.buttonText} onPress={this.entrar} />
            </View> 
            </ScrollView>
        </SafeAreaView>
      
    );
  }
}

