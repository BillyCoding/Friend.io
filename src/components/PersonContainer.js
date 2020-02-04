import React, { Component } from 'react';
import { Text, View, Image, FlatList} from 'react-native';

import friend from '../style/friend'

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
      }
  
      loadFriends = () => {
        fetch("https://randomuser.me/api/?results=25")
          .then( res => res.json() )
          .then( res => {
            this.setState({ data: res.results || [] })
          })
      }
  
      componentDidMount(){
        this.loadFriends();
      }

        render(){
            return(
                <FlatList data={this.state.data} renderItem={({item}) => (
                    <View style={friend.friendContainer}>
                       
                        <Image source={{uri: item.picture.thumbnail}} style={friend.friendImage}/>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                            <Text style={friend.friendName}>{item.name.first} {item.name.last}</Text>
                            <Text style={friend.friendEmail}>{item.email}</Text>
                            </View>
                   
                    </View>
                    )}  />
        )
    }
}
