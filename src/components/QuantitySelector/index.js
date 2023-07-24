import React, { useState } from "react";
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from "react-native";

const QuantitySelector = ({quantity, setQuantity}) => {

  const onMinus = () => {
    setQuantity(Math.max(0 , quantity - 1 ));
    onQuantityChange(quantity - 1);
  };
  
  const onPlus = () => {
    setQuantity(quantity + 1);
    
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#fff',
    width : '80%',
    margin: '5%',
   
   
    
    
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderRadius : 20,
    
  },
  butonText: {
    fontSize: 15,
  },
  quantity: {
    color: '#000',
    fontSize : 18,
  },
});

export default QuantitySelector;
