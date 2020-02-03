import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import global from '../style/global';

export default class Button extends Component{
    render(){
        return(
            <TextInput style={global.input} placeholder={this.props.place}>

            </TextInput>
        );
    }
}
