import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import React, {Component} from 'react';
import Icons from  'react-native-vector-icons/AntDesign';

import Login from './src/screen/loginScreen';
import Friend from './src/screen/friendScreen';
import ArquiveFriend from './src/screen/friendArquiveScreen';
import Home from './src/screen/homeScreen';
import FriendProfile from './src/screen/friendProfileScreen';
import PersonContainer from './src/components/PersonContainer';

/*const Tab = createMaterialBottomTabNavigator(
  {
    home: {screen:Home, navigationOptions:{ 
            tabBarIcon:({tintColor}) =>(
              <Icons name="home" color={tintColor} size={22}/>
              ),
              //initialRouteName="Home",
              activeColor="#f0edf6",
              inactiveColor="#3e2465",
              barStyle={ backgroundColor: '#694fad' }
    }},
    friend: {screen:Friend, navigationOptions:{ 
            tabBarIcon:({tintColor}) =>(
              <Icons name="settings" color={tintColor} size={22}/>
            ),
              activeColor="#f0edf6",
              inactiveColor="#3e2465",
              barStyle={ backgroundColor: '#694fad' }
          }
    }},
  
);

function MyTabs() {
  return (
    <Tab.Navigator
   >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Friend} />
    </Tab.Navigator>
  );
}*/

const MainNavigator = createStackNavigator({
  home: Home,
  login: Login,
  friend: Friend,
  arquiveFriend: ArquiveFriend,
  friendProfile: FriendProfile,
  personContainer: PersonContainer
},
  {
    headerMode: 'none'
  }
);

/*
const MainNavigator = createBottomTabNavigator(
  {
    friend: Friend,
    home: Home,
  },

  {
      tabBarOptions:{
        activeTintColor: '#222',
        inactiveTintColor: '#ddd',
        style:{
          backgroundColor:'#fafafa',
              },
        showLabel: false
      },
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) =>{
          const {routeName} = navigation.state;
          let IconComponent = Icons;
          let iconName;

          if(routeName === "home"){
            iconName = 'home'
          }else if(routeName === "friend"){
            iconName = 'settings'
          }

          return <IconComponent name={iconName} size={30} color={tintColor}/>
        }
      })
      
  }
);*/

const App = createAppContainer(MainNavigator);  // For setting Navigation Stack

export default App;