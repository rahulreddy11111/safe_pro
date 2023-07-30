import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
//import DestinationSearchScreen from "../screens/DestinationSearchScreen";
import HomeTabNavigator from "./HomeTabNavigator";
//import ProductDisplayScreen from "../screens/ProductDisplayScreen";
//import ShoopingCartScreen from "../screens/ShoopingCartScreen";
//import QuantitySelector from "../components/QuantitySelector";
//import Account_profile from "../screens/Account_profile";
import Customer_care from "../components/Account_detailed/Customer_care";
import Detailed_product from "../screens/Detailed_product";
import Login_screen from "../screens/Login_screen";
//import AddressScreen from "../screens/AddressScreen";
import Detailed_W_product from "../screens/Detailed_wishlist_product";
import Destination_Search from "../screens/Destination_search";


const Stack = createStackNavigator();
   
const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name={"DetailedProduct"}
          component={Detailed_product}
          options={{
            title: "Prduct Details"
          }}
        /> 
        <Stack.Screen
          name={"DetailedwishlistProduct"}
          component={Detailed_W_product}
          options={{
            title: "Prduct Details"
          }}
        /> 
         <Stack.Screen
          name="logout_item"
          component={Login_screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"customer care"}
          component={Customer_care}
          options={{
            title: "Customer care"
          }}
        />  
        <Stack.Screen
          name={"Destination Search"}
          component={Destination_Search}
          options={{
            title: "Search the best"
          }}
        /> 

         {/* <Stack.Screen
          name={"customer care"}
          component={Customer_care}
          options={{
            title: "Customer care"
          }}
        />  
        <Stack.Screen
          name={"DetailedProduct"}
          component={Detailed_product}
          options={{
            title: "Prduct Details"
          }}
        /> 
        <Stack.Screen
          name="logout_item"
          component={Customer_care}
          options={{
            headerShown: false,
          }}
        /> */}
       {/* <Stack.Screen
       name = "screen_address"
       component = {Customer_care}
       options = {{
        title : "Address screen"
       }}
       /> */}
       


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
