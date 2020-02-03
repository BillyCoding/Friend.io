import React, { Component } from 'react';
import { Text, View} from 'react-native';

export default class SplashScreen extends Component{
        render(){
            return(
                <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 40}}>FRIEND.IO</Text>
                </View>
        )
    }
}
