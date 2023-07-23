import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExploreNavigator';
//import HomeScreen from '../screens/Home';
//import ProfileScreen from '../screens/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//import Router from './ExploreNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import PostScreen from "../screens/PostScreen";
//import Account_profile from "../screens/Account_profile";
//import ShoopingCartScreen from "../screens/ShoopingCartScreen";
//import ProductDisplayScreen from '../screens/ProductDisplayScreen';
//import Login_screen from '../screens/Login_screen';
import Customer_care from '../components/Account_detailed/Customer_care';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Store'}
        component={Customer_care}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="storefront" size={30} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name={'Account'}
        component={Customer_care}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Wishlist'}
        component={Customer_care}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="heart" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={Customer_care}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="shopping-cart" size={25} color={color} />
          ),
        }}
      />
      
     
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;