import React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import {Auth} from 'aws-amplify';
import {View , Text} from 'react-native';
import { StyleSheet } from 'react-native';


const Login_screen = () => {

const onLogout = () => {
    Auth.signOut();
};

    return (
        <SafeAreaView>
            <View style = {styles.page}>
        <Pressable onPress = {onLogout} style = {styles.button}>
       <Text style = {styles.button_text}>Sign Out</Text>
        </Pressable>
        </View>
        </SafeAreaView>
    );
};
export default Login_screen;

const styles = StyleSheet.create({
    page : {
       
        height : '100%',
        width : '100%',
        
    },
    button : {
        height : '7%',
        width : '100%',
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 20,
    },
    button_text : {
        fontSize : 15,
        color : 'red',
    }

});
