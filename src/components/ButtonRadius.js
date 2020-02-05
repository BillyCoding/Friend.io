import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={{
                                        backgroundColor: '#222', 
                                        padding: 15,
                                        width: 60, height: 60,
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        borderRadius: 100,
                                        elevation: 4,
                                        marginHorizontal: 5,
                                        marginVertical:10
                                    }}>
                <Icon name="arrowright" color="white" size={25}/>
            </TouchableOpacity>
        );
    }
}
