import React from 'react';
import {View , Text , Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Customer_care from '../../../src/components/Account_detailed/Customer_care';
import { useNavigation } from '@react-navigation/native';
import Login_screen from '../Login_screen';


const Account_profile = () => {
    const navigation =useNavigation();
    
    const Customer_content = () =>
    {
          navigation.navigate('customer care');
    }
    const sign_out = () => {
      navigation.navigate(logout_item);
    }
   
    return (
        
            <ScrollView>

        <View style = {{width : '100%' , height:'100%' ,top : '1%', backgroundColor : '#d5d9db' , justifyContent : 'space-around' }}>
           

            <View style ={{alignItems : 'flex-start' , top : '3%' }}>

            
            <Pressable onPress = {Customer_content} style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Customer Care
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>
            
            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Track You Order
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              How To Return
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              How do I redeem my coupon
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Payments
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
             Recently Viewed
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Terms and Conditions
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Promotional terms and condition
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Return and Refund Policy
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              We respect your privacy
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

           
            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              Fees and payments
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
             We respect you privacy
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>

            <Pressable  style = {{marginVertical : '0.1%', width : '100%' ,backgroundColor : 'white'}}>
            <View style = {{resizeMode : 'cover' , justifyContent : 'space-between', flexDirection : 'row' , marginHorizontal : '4%'}}>
            <Text style = {{marginVertical : '6%', marginHorizontal : '4%' }}>
              join Our team
            </Text>
            <EvilIcons name = "arrow-right" size = {30} style = {{marginVertical : '5%'}}/>
            </View>
            </Pressable>
            

            
        </View>
          
            </View>
            
        </ScrollView>
       
        
    );
};
export default Account_profile;