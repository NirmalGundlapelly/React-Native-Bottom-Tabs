import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Tabs/Home';
import Explore from './Tabs/Explore';
import Library from './Tabs/Library';

import homeIcon from './images/homeIcon.png';
import exploreIcon from './images/exploreIcon.png';
import libraryIcon from './images/libraryIcon.png';

const Tab = createBottomTabNavigator();

export default class TabNavigations extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen
          options={{
            tabBarIcon: () => <Image source={homeIcon} />,
            tabBarActiveTintColor: '#CDE7BE',
            tabBarInactiveBackgroundColor: '#181A1A',
            tabBarActiveBackgroundColor: '#181A1A',
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <Image source={exploreIcon} />,
            tabBarActiveTintColor: '#CDE7BE',
            tabBarInactiveBackgroundColor: '#181A1A',
            tabBarActiveBackgroundColor: '#181A1A',
         
          }}
          name="Explore"
          component={Explore}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <Image source={libraryIcon} />,
            tabBarActiveTintColor: '#CDE7BE',
            tabBarInactiveBackgroundColor: '#181A1A',
            tabBarActiveBackgroundColor: '#181A1A',
          }}
          name="Library"
          component={Library}
        />
      </Tab.Navigator>
    );
  }
}
