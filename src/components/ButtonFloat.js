import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={{
                                        backgroundColor: '#5bc4f5', 
                                        padding: 10,
                                        width: 55, height: 55,
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        borderRadius: 100,
                                        elevation: 5,
                                        position: 'absolute',
                                        bottom: 20, right: 20

                                    }}>
                <Icon name={this.props.name} color="white" size={25}/>
            </TouchableOpacity>
        );
    }
}
