import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import global from '../style/global';


import Button from '../components/Button';
import Input from '../components/InputText';

export default class homeScreen extends Component{

    state={
        buttonText: 'Continuar'
    }

    alternar = () => {
        this.setState({buttonText: this.state.buttonText ? '' : 'Avançar'})
    }


    render(){
        return(
        
        <SafeAreaView style={global.safeArea}>
          <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA"/>
            <View style={global.Body}>  
                   
                <Input place='Nome'/>
                <Button texto={this.state.buttonText} />
            </View> 
        </SafeAreaView>
      
    );
  }
}

