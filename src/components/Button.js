import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={{
                                        backgroundColor: '#222', 
                                        justifyContent: 'center', 
                                        paddingVertical: 15,
                                        paddingHorizontal: 25,
                                        alignItems: 'center',
                                        borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
                                        elevation: 2,
                                        marginVertical:5,
                                    }}>
                <Text style={{color: '#fafafa', fontFamily: 'Poppins-Bold'}}>
                    {this.props.texto}
                </Text>
            </TouchableOpacity>
        );
    }
}
