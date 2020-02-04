import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, Alert} from 'react-native';

import global from '../style/global';
import login from '../style/login';


import Button from '../components/Button';
import Input from '../components/InputText';
import InputPass from '../components/InputPassword';

export default class loginScreen extends Component{

    state={
        buttonText: 'Entrar'
    }

    entrar = () => {
        Alert.alert("Login", "Bem-Vindo");
        this.props.navigation.navigate('friend');
    }


    render(){
        return(
        
        <SafeAreaView style={global.safeArea}>
          <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA"/>
            <Image source={require('../assets/profile.jpg')} style={login.image}/>
            <Text style={login.title}>Login</Text> 
            <View style={login.Body}>  
                  
                
                <Input place='Nome'/>
                <InputPass place='Senha'/>
                <Button texto={this.state.buttonText} onPress={this.entrar} />
            </View> 
        </SafeAreaView>
      
    );
  }
}

