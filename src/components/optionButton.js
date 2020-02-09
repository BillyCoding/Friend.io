import React, { Component } from 'react';
import { Text, View } from 'react-native';
import OptionsMenu from "react-native-options-menu";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Icone = (<Icon name="options-vertical" size={20} color="white" />)
export default class optionButton extends Component{
    
    render(){
        return(

        <View style={{margin: 0, marginLeft: 20, marginRight: '2%'}}>
        <OptionsMenu
            customButton={Icone}
            destructiveIndex={1}
            buttonStyle={{ width: 20, height:20, margin: 2, resizeMode: "contain" }}
            options={this.props.opcoes}
            actions={this.props.acoes}/></View>
    )}
}
