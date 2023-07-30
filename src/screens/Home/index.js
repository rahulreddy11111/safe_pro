import React from 'react';
import {View, ImageBackground, Text, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
//import {useNavigation} from '@react-navigation/native';
import SearchResults from '../SearchResults';
import ImageCarousel from '../../components/ImageCarousel';
import product from '../../data/product';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
    <View style = {{justifyContent : 'center' ,  height : '100%' , width : '100%' ,backgroundColor : 'white'}}>
      <View style = {{ padding : 1, flex : 1 , top : '4%' , height : '10%' }}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}
        >
        <Fontisto name="search" size={25} color={'#e88079'} margin = {10} />
        <Text style={styles.searchButtonText}>Search by product,brand & more...</Text>
      </Pressable>
      </View>
      
      <View style = {{height : '10%' , top : ' 1%'}}>
      
      <SearchResults/>

      </View>

      <View style = {{ top : '25%' , flex : 1 , height : '40%' }}>
      
      <ImageCarousel images = {product.images}/>

      </View>
     
      <View style = {{ top : '25%' , height : '40%' , flex : 1}}>
      
      <ImageCarousel images = {product.images}/>

      </View>

    </View>
   </ScrollView>
   </SafeAreaView>
  
   
    
  );
};

export default HomeScreen;