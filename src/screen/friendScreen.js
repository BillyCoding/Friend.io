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
        numberFriends: Math.floor(Math.random() * 10) + 10
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
                <View style={global.head}>
                    <View style={global.headTitle}>
                        <TouchableOpacity onPress={this.voltar} style={[global.headOption, {alignItems: 'flex-start', marginLeft:10}]}>  
                            <Icon name="arrowleft" color="white" size={25} />
                        </TouchableOpacity>
                        <View>
                            <Text style={friend.title}>My Friends</Text>
                            <Text style={{color: 'white', fontSize:10, fontFamily: 'Poppins-Medium',marginTop: -5, marginLeft: 30}}>{this.state.numberFriends} friends</Text>
                        </View>
                    </View>
                     <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={friend.headOption}>
                        <Icon name="search1" color="white" size={25} />
                    </TouchableOpacity></View>
                    
                </View>   
                <ScrollView>
                <TouchableOpacity style={friend.friendContainer}>
                <View style={friend.friendOptions}><Icon name="plus" color="white" size={25}  /></View>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <Text style={friend.friendName}>Add friend</Text> 
                            </View>
                </TouchableOpacity> 

                <FriendContainer number={this.state.numberFriends}/>

                <TouchableOpacity style={friend.friendContainer}>
                <View style={[friend.friendOptions, {backgroundColor: '#aaa'}]}><Icon name="sharealt" color="white" size={20}  /></View>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <Text style={friend.friendName}>Invite friends</Text> 
                            </View>
                </TouchableOpacity> 
                <TouchableOpacity style={friend.friendContainer}>
                <View style={[friend.friendOptions, {backgroundColor: '#aaa'}]}><Icon name="questioncircleo" color="white" size={20}  /></View>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <Text style={friend.friendName}>Help</Text> 
                            </View>
                </TouchableOpacity> 
                </ScrollView>
            </View> 
        </SafeAreaView>
      
    );
  }
}

