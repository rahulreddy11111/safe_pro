/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Router from './src/navigation/Router';
import HomeScreen from './src/screens/Home';
import { StripeProvider } from '@stripe/stripe-react-native';

import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <StripeProvider 
    publishableKey = "pk_live_51NMsdvSEPKBrD8xkq2c1VqrXWCfRfbJ9bQxaxScvrNsbTljTcWizaZNHgJWtgi52vYKlzCGSMdoFu9UEuFwTWicl000ps5CpZ5">
      <Router/>
      </StripeProvider>
      
      
     
      
  );
}



export default withAuthenticator(App);
