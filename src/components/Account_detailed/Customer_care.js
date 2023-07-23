import React from 'react';
import {View , Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Customer_care = () => {
    return(
        <SafeAreaView>
     <View style = {{width : '100%' , height : '100%' , backgroundColor : '#dee3e3'}}>
        <View style = {{flexDirection : 'row' , top : '5%' ,padding : 13 , backgroundColor : 'white'   } }>
            <Fontisto name = "email" size = {25}/>
            <View style = {{flexDirection : 'column', marginHorizontal : '5%' , margin : '2%' }}>
            <Text style = {{fontWeight : '500' , margin : '1%' }}> Write to us</Text>
            <Text> Send us on myshelterbetter@gmail.com</Text>
            </View>
        </View>

        <View style = {{flexDirection : 'row' , top : '6%' ,padding : 13 , backgroundColor : 'white'   } }>
            <Feather name = "phone-call" size = {25}/>
            <View style = {{flexDirection : 'column', marginHorizontal : '5%' , margin : '2%' }}>
            <Text style = {{fontWeight : '500' , margin : '1%' }}> Call us</Text>
            <Text> +919848022338 </Text>
            </View>
        </View>

        <View style = {{flexDirection : 'row' , top : '7%' ,padding : 13 , backgroundColor : 'white' , justifyContent : 'space-between'   } }>
            <Entypo name = "globe" size = {25}/>
            <View style = {{flexDirection : 'column', marginHorizontal : '6%' , margin : '2%' }}>
            <Text style = {{fontWeight : '500' , margin : '1%' }}> Reach us </Text>
            <Text> Scientific Enclave Hesarghatta Rd , Hessargatta ,    Bengaluru ,Karnataka </Text>
            </View>
        </View>

        <View style = {{flexDirection : 'row' , top : '8%' ,padding : 10, backgroundColor : 'white' , justifyContent : 'space-between'   } }>
        <View style = {{flexDirection : 'row' , justifyContent : 'space-around' , width : '100%'}}>
            <View style = {{flexDirection : 'column' , alignItems : 'center' ,margin : '4%' }}>
            <FontAwesome name = "exchange" size = {35} style = {{bottom : '15%'}}/>
            <Text style = {{fontWeight : '500' , margin : '1%' }}> Easy  </Text>
            <Text> Exchange</Text>
            </View>

            <View style = {{flexDirection : 'column' , alignItems : 'center' ,margin : '4%' }}>
            <MaterialCommunityIcons name = "hand-heart-outline" size = {35} style = {{bottom : '15%'}}/>
            <Text style = {{fontWeight : '500' , margin : '1%' }}> Expert </Text>
            <Text> Assured </Text>
            </View>

            <View style = {{flexDirection : 'column' , alignItems : 'center' ,margin : '4%' }}>
            <MaterialCommunityIcons name = "certificate-outline" size = {35} style = {{bottom : '15%'}}/>
            <Text style = {{fontWeight : '500' , margin : '1%' }}> Assured</Text>
            <Text> Quality </Text>
            </View>

            </View>
        </View>
        
     </View>
     </SafeAreaView>
    );
};
export default Customer_care;