import React, { Component } from 'react';
import {SafeAreaView, StatusBar, View, Alert,Text, Image, FlatList} from 'react-native';

import FriendContainer from '../components/PersonContainer';
import Icon from 'react-native-vector-icons/AntDesign';

import global from '../style/global';
import friend from  '../style/friend';


import Button from '../components/Button';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class homeScreen extends Component{

    state={
        buttonText: 'Continuar',
        numberFriends: Math.floor(Math.random() * 14) + 5
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
                <View style={friend.head}>
                    <TouchableOpacity onPress={this.voltar} style={[friend.headOption, {alignItems: 'flex-start', marginLeft:10}]}>  
                        <Icon name="arrowleft" color="white" size={25} />
                    </TouchableOpacity>
                    <Text style={friend.title}>My Friends</Text>
                     <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={friend.headOption}>
                        <Icon name="search1" color="white" size={25} />
                    </TouchableOpacity></View>
                    
                </View>   
                <ScrollView>
                <TouchableOpacity style={friend.friendContainer}>
                        <Image source={require('../assets/adicionar.png')} style={friend.friendImage}/>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <Text style={friend.friendName}>Adicionar novo</Text>
                                <Text style={{color: 'black', fontSize:10, fontFamily: 'Poppins-Medium'}}>{this.state.numberFriends} friends</Text>
                                
                            </View>
                </TouchableOpacity> 
                <FriendContainer number={this.state.numberFriends}/>
                </ScrollView>
            </View> 
        </SafeAreaView>
      
    );
  }
}

