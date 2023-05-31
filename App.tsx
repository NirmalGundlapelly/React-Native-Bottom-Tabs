import {Text, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Password from './screens/Password';
import RecoveryPassword from './screens/RecoveryPassword';
import VerifyPassword from './screens/VerifyPassword';
import SetPassword from './screens/SetPassword';
import SignUp from './screens/SignUp';
import Home from './screens/Tabs/Home';
import TabNavigations from './screens/TabNavigations';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Password" component={Password} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: 'Back to Log in',
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white',
            }}
            name="RecoveryPassword"
            component={RecoveryPassword}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: 'Back to Log in',
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white',
            }}
            name="VerifyPassword"
            component={VerifyPassword}
          />
          <Stack.Screen name="SetPassword" component={SetPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TabNavigations" component={TabNavigations} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
