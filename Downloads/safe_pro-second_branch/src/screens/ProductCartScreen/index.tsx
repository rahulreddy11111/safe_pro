import 'core-js/full/symbol/async-iterator';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, Pressable } from 'react-native';
import ProductCartItem from '../../components/ProductCartItem';
//import Button from '../../components/Button';
import {DataStore} from 'aws-amplify';
import { Product, CartProduct } from '../../models';
//import {Product} from '../../models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import { ActivityIndicator } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';


//import products from '../../data/products';
//import products from '../../data/cart';
import { SafeAreaView } from 'react-native-safe-area-context';
//import product from '../../data/product';

const ShoopingCartScreen = ({ searchValue }: { searchValue: string }) => {
  const [cartProducts , setCartProducts] = useState<CartProduct[]>([]);

  const navigation = useNavigation();

  const onCheckout = () => {
    // Logic for checkout button onPress
  };

  const onClearCart = () => {
    navigation.navigate('screen_address' , {totalPrice});
  };
  
  // const handleQuantityChange = (newQuantity, cartProductID) => {
  //   console.warn(`Quantity changed for id ${cartProductID}: ${newQuantity}`);
  // };
  
  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items
    DataStore.query(CartProduct, cp =>
      cp.userSub.eq(userData.attributes.sub)
    ).then(setCartProducts);
   
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
          
        ),
      );

      // assign the products to the cart items
      setCartProducts(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
          ...cartProduct,
          product: products.find(p => p.id === cartProduct.productID),
        })),
      ); 
    };
    
    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    const subscription = DataStore.observe(CartProduct).subscribe(msg =>
      fetchCartProducts(),
    );
    return subscription.unsubscribe;
  }, []);


  useEffect(() => {
    const subscriptions = cartProducts.map(cp =>
      DataStore.observe(CartProduct, cp.id).subscribe(msg => {
        if (msg.opType === 'UPDATE') {
          setCartProducts(curCartProducts =>
            curCartProducts.map(cp => {
              if (cp.id !== msg.element.id) {
                console.log('differnt id');
                return cp;
              }
              return {
                ...cp,
                ...msg.element,
              };
            }),
          );
        }
      }),
    );

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0,
  );

  // const onCheckout = () => {
  //   navigation.navigate('Address', {totalPrice});
  // };

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }


  

  
  return ( 
    
        <View style = {{backgroundColor : 'lightgrey' }}>
      <ScrollView >
        <View style = {{flexDirection : 'row' , alignItems : 'flex-end' ,justifyContent : 'flex-start' , margin : 5 }}>
        <MaterialIcons name = "delivery-dining" size = {25} color = {'green'}/>
        <Text style = {{color : 'green' , fontWeight : '500'}}> Free Delivery on your order </Text>
        </View>
        <View style={styles.page}>
          {/* Render Product Component */}
          <FlatList
            data={cartProducts}
            renderItem={({ item }) => <ProductCartItem cartItem={item} />
          }
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style = {{height : 80 ,margin : '2%' ,  backgroundColor : 'white' , borderRadius : 10 , alignItems : 'center' ,justifyContent : 'center' , flexDirection : 'row'}}>
            <EvilIcons name = "heart" size = {35} style = {{margin : '5%'} }/>
            <Text style = {{fontWeight : '500'}}>
               Add from Wishlist
            </Text>
        </View>
        
        <View style = {{height : 80 ,margin : '2%' ,  backgroundColor : 'white' , borderRadius : 10 , alignItems : 'center' ,justifyContent : 'center', flexDirection : 'row'  }}>
            <Foundation name = "ticket" size = {35} style = {{margin : '5%'}}/>
            <Text style = {{fontWeight : '500'}}>
                Add Coupon
            </Text>
        </View>

        <View style={{ height: 190, marginVertical: '7%', marginHorizontal: '2%', backgroundColor: 'white', borderRadius: 20, alignItems: 'flex-start' , padding : 1 }}>
            <View style = {{margin : 1}}>
  <Text style={{ marginLeft: '4%', marginTop: 10 , fontWeight : '700' , padding : 4 ,fontSize : 14  }}>
    Order Details
  </Text>
  <View style={{ width: '90%', height: 200 }}>
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' , marginHorizontal : '5%', padding : 4 }}>
      <Text>bag total ({cartProducts.length} items) </Text>
      <Text>subtotal ({cartProducts.length} items) : {totalPrice.toFixed(2)}</Text>
    </View>
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginHorizontal : '5%' , padding : 4 }}>
      <Text>bag Savings</Text>
      <Text>300rs</Text>
    </View>
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' , marginHorizontal : '5%' , padding : 4 }}>
      <Text>Convenience Fee What's this?</Text>
      <Text></Text>
    </View>
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' , marginHorizontal : '5%' , padding : 4 }}>
      <Text>Delivery Fee</Text>
      <Text style={{ textDecorationLine: 'line-through' }}>100rs</Text>
    </View>
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' , marginHorizontal : '5%' , padding : 4 }}>
      <Text style={{ fontWeight: '700' }}>Total Amount</Text>
      <Text>2700rs</Text>
    </View>
  </View>
</View>
</View>


        <View style = {{height : 130 ,margin : '2%' ,  backgroundColor : 'white' , borderRadius : 5 , alignItems : 'flex-start' ,marginBottom : '10%' }}>
           <View style = {{margin : '4%' }}>
            <Text style = {{fontWeight : '600', marginBottom : '4%' }} >
                Refund/Return policy
            </Text>
            <Text style = {{ marginBottom : '2%' , flex : 1 , fontSize : 13}} >
                In case of return , We ensure best refund Assurance , Full amount will be refunded excluding Convenience Fee
            </Text>

            <Text style = {{color : 'grey' }} >
                Read Policy
            </Text>

            </View>
        </View>

        
      
      </ScrollView>
     
      <View style = {{width : '98%',height : '33%', backgroundColor : 'white' }}>
        <View style = {{flexDirection : 'row', justifyContent : 'space-around'}}>
          <View style = {{justifyContent : 'center'}}>
          <Text  style = {{top : '6%' , fontWeight : '600' }}>${totalPrice.toFixed(2)}</Text>
          <Text  style = {{top : '6%' , fontWeight : '600', color : '#328bc7' }}>View Details</Text>
          </View>
          <Pressable onPress={onClearCart} style={styles.clearCartButton}>
            <Text style={styles.clearCartButtonText}>Pay Now</Text>
          </Pressable>
          </View>
          </View>
          </View>
        
   
    
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  clearCartButton: {
    
    backgroundColor: 'black',
    padding: '3%',
    borderRadius: 20,
    alignItems : 'center',
    margin : '3%',
   
   
  },
  clearCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    margin : '5%',
  },
});

export default ShoopingCartScreen;
