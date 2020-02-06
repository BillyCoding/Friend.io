import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screen/loginScreen';
import Friend from './src/screen/friendScreen';
import Home from './src/screen/homeScreen';

const MainNavigator = createStackNavigator({
  login: Login,
  friend: Friend,
  home: Home
},
  {
    headerMode: 'none'
  }
);

const App = createAppContainer(MainNavigator);  // For setting Navigation Stack

export default App;