import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Alert} from 'react-native';

import global from '../style/global';


import Button from '../components/Button';

export default class homeScreen extends Component{

    state={
        buttonText: 'Continuar'
    }

    voltar = () => {
        Alert.alert("Sair", "Volte mais tarde!")
    }


    render(){
        return(
        
        <SafeAreaView style={global.safeArea}>
          <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA"/>
            <View style={global.Body}>  
                <Button onPress={this.voltar} texto="Sair"/>
                
            </View> 
        </SafeAreaView>
      
    );
  }
}

