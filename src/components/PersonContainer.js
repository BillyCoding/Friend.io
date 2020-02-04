import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Animated,} from 'react-native';

import friend from '../style/friend'

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
      }
  
      loadFriends = () => {
        fetch("https://randomuser.me/api/?results=5")
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
                    <FadeInView style={friend.friendContainer}>
                       
                        <Image source={{uri: item.picture.thumbnail}} style={friend.friendImage}/>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                            <Text style={friend.friendName}>{item.name.first} {item.name.last}</Text>
                            <Text style={friend.friendEmail}>{item.email}</Text>
                            </View>
                   
                    </FadeInView>
                    )}  />
        )
    }
}
