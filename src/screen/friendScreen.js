import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Alert,Text, Image, FlatList} from 'react-native';

import FriendContainer from '../components/PersonContainer';

import global from '../style/global';
import friend from  '../style/friend';


import Button from '../components/Button';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

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
          <StatusBar barStyle="light-content" backgroundColor="#5bc4f5"/>
          
            <View style={friend.Body}> 
                <Text style={friend.title}>My Friends</Text>
                <ScrollView>
                <TouchableOpacity style={friend.friendContainer}>
                        <Image source={require('../assets/adicionar.png')} style={friend.friendImage}/>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <Text style={friend.friendName}>Adicionar novo</Text>
                            </View>
                </TouchableOpacity> 
                <FriendContainer/>
                </ScrollView>
            </View> 
        </SafeAreaView>
      
    );
  }
}

