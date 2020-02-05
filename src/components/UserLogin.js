import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Animated,} from 'react-native';

import friend from '../style/friend';
import Buttom from './Button';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SplashScreen extends Component{
    

        render(){
            return(
                    <View style={[friend.friendContainer, {backgroundColor: '#ddd', borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems:'center', paddingVertical: 20,marginBottom: -5}]}>
                       
                        <Image source={require('../assets/profile.jpg')} style={{width: 65, height: 65, borderRadius: 100,marginRight: '5%',}}/>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                            <Text style={friend.friendName}>Gustavo Ferreira</Text>
                            <Text style={[friend.email, {fontFamily: 'Poppins-Italic', fontSize: 11}]}>The back will be right</Text>
                            </View>

                    </View>
        )
    }
}
