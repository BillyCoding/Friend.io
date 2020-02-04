import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Alert,Text, Image, FlatList} from 'react-native';

import FriendContainer from '../components/PersonContainer';

import global from '../style/global';
import friend from  '../style/friend';


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
        
        <SafeAreaView style={friend.safeArea}>
          <StatusBar barStyle="dark-content" backgroundColor="#fafafa"/>
            <View style={friend.Body}> 
                <Text style={friend.title}>My Friends</Text>
                <FriendContainer/>
                
            </View> 
        </SafeAreaView>
      
    );
  }
}

