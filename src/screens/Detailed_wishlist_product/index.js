import React, { useState, useCallback } from 'react';
import { View, Image, FlatList, StyleSheet, useWindowDimensions ,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Detailed_carousel from '../../components/Detailed_wishlish_carousel';
import { useRoute } from '@react-navigation/native';

 const Detailed_W_product = ({route}) => {
    const { item, isLiked } = route.params || { item: {}, isLiked: false };

  

  return (
    <SafeAreaView>
    <View >
            <Detailed_carousel item = {item} isLiked = {isLiked}/>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default Detailed_W_product;
