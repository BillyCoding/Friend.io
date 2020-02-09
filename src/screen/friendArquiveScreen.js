import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Alert,Text, Image, FlatList} from 'react-native';

import FriendContainer from '../components/PersonContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import Simple from 'react-native-vector-icons/SimpleLineIcons';

import global from '../style/global';
import friend from  '../style/friend';
import OptionsButton from '../components/optionButton';


import Button from '../components/Button';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class homeScreen extends Component{

    state={
        buttonText: 'Continuar'
    }

    voltar = () => {
        //Alert.alert("Sair", "Volte mais tarde!")
        this.props.navigation.navigate('home');
    }


    render(){
        return(
        
        <SafeAreaView style={friend.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="#5bc4f5"/>
          
            <View style={friend.Body}>
                <View style={[friend.head]}>
                    <TouchableOpacity onPress={this.voltar} style={[friend.headOption, {alignItems: 'flex-start', marginLeft:10}]}>  
                        <Icon name="arrowleft" color="white" size={25} />
                    </TouchableOpacity>
                    <Text style={friend.title}>Arquived</Text>
                    <View style={{flexDirection: 'row'}}>
                    <OptionsButton style={friend.headOption} opcoes={["Ações"]} acoes={[this.voltar]} />
                    
                </View>
                    
                </View>   
                <ScrollView>
                
                <FriendContainer number={6}/>
                </ScrollView>
            </View> 
        </SafeAreaView>
      
    );
  }
}

