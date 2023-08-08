import 'core-js/full/symbol/async-iterator';
import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, useWindowDimensions, Text, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { DataStore, Auth } from 'aws-amplify';
import { Product, CartProduct } from '../../models';
import { useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice: number;
    images : string;
    description : string;
    options : string ;
  };
  isliked : boolean;
}

const Detailed_Wishlish_carousel = ({ item, isLiked }: { item: ProductItemProps['item'], isLiked: boolean })=> {

  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const [indicate, setIndicate] = useState(true);
  const [product, setProduct] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState<String | null>(null);
  const [quantity, setQuantity] = useState(1);
 
  
  const route = useRoute();

  // useEffect(() => {
  //   console.log('Route Params:', route.params);
  //   if (item.id) {
  //     console.log('ID not found in Route Params');
  //     return;
  //   }

  //   DataStore.query(Product, item.id).then(setProduct);
  // }, [item.id]);

  const onFlatlistUpdate = (index: number) => {
    setActiveIndex(index);
  };

  const onPressWishlist = () => {
    setIndicate(!indicate);
   
  };

  // useEffect(() => {
  //   if (product?.options) {
  //     setSelectedOption(product.options[0]);
  //   }
  // }, [product]);

  const onAddToCart = async () => {
    // console.warn('cart item');
    try{
      const userData = await Auth.currentAuthenticatedUser();
      

      if (!userData) {

        return;
      }
      console.warn('cart item');
      

      const newCartProduct = new CartProduct({
        userSub: userData.attributes.sub,
        quantity : 1,
        option: selectedOption,
        productID: item.id,
        wishlist : indicate,
      });
      await DataStore.save(newCartProduct);
      console.warn('Product added to cart');
  }   catch (error) {
      console.log('Error adding product to cart:', error);
    // Handle the error or show an error message to the user
  }
};

  

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <ScrollView style={{ height: 100, width: '100%' }}>
        <View style={[styles.root, { height: 400 }]}>
        
            <FlatList
              data={item.images}
             
              renderItem={({ item }) => (
                <Image
                  style={[styles.image, { width: windowWidth - 40 }]}
                  source={{ uri: item }}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={true}
              snapToInterval={windowWidth - 20}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
              viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
              }}
              onViewableItemsChanged={({ viewableItems }) => {
                const index = viewableItems.length > 0 ? viewableItems[0].index || 0 : 0;
                onFlatlistUpdate(index);
              }}
            />
     
    </View>
    <View style = {[styles.descrp_container, {top : '1.5%' ,height : 150}]}>
        <Text style = {{fontSize : 16 , margin : 5 }}>
          {item.title}
        </Text>
        <Text style = {{color : 'grey'}}>
          {item.description}
        </Text>
        
        <View style = {{flexDirection : 'row' ,top : '1%' , alignItems:'center'  }}>
        <Text style = {{margin : '2%' , fontSize : 15 , fontWeight : '600'}}>
          ₹{item.price.toFixed(2)} MRP

        </Text>
        <Text style = {{textDecorationLine : 'line-through' , color : 'grey'}}>
          ₹{item.oldPrice.toFixed(2)}
        </Text>
        </View>
    </View>

    <View style = {[styles.descrp_container , { top : '2%' , height: 150}]}>
      <View style = {{flexDirection : 'row'}}>
        <FontAwesome name = "certificate" size = {25} color = '#2a9c3f' 
        />
        <Text style = {{fontSize : 16 , margin : 5 , color : '#2a9c3f'}}>
          Offer price 
        </Text>
        <Text style = {{fontSize : 16 , margin : 5 , color : '#2a9c3f'}}>
        ₹90
        </Text>
        </View>

        <Text style = {{color : '#dcf5e1'}}>
          
        </Text>
        
        <View style = {{flexDirection : 'row' ,top : '2%' , alignItems:'center'  }}>
        <Text style = {{margin : '2%' , fontSize : 15 , fontWeight : '600'}}>
         

        </Text>
        <Text style = {{textDecorationLine : 'line-through' , color : 'grey'}}>
          
        </Text>
        </View>
    </View>

    <View style = {[styles.descrp_container, {top : '3%', height: 150 }]}>
      <View style = {{flexDirection : 'column'}}>
        <Text style = {{fontSize : 16 , margin : 5 , color : '#000' , fontWeight : '700'}}>
          Delivery Details 
        </Text>

        <View style = {{flexDirection : 'row' , alignItems : 'center' }}>
        <MaterialCommunityIcons name = "truck-delivery" size = {25} color = '#000'/>

        <View style = {{marginVertical : '1%'}}>
        <Text style = {{fontSize : 16 ,  color : 'black' , fontWeight : '500' ,marginHorizontal : '4%'}}>
           Expected delivery by sunday
        </Text>
        
        <Text style = {{fontSize : 16 , color : 'grey',marginHorizontal : '4%'}}>
           find delivery based item in the bag
        </Text>

        </View> 
        </View>
         
        <View style = {{flexDirection : 'row' }}>
        <MaterialCommunityIcons name = "cash-multiple" size = {25} color = '#000'/>

        
        
        <Text style = {{fontSize : 16 , margin : 5 , color : '#000',marginHorizontal : '4%'}}>
        Cash on delivery Available
        </Text>

      
        </View>

        </View>

        
        <View style = {{flexDirection : 'row' ,top : '2%' , alignItems:'center'  }}>
        <Text style = {{margin : '2%' , fontSize : 15 , fontWeight : '600'}}>
         

        </Text>
        <Text style = {{textDecorationLine : 'line-through' , color : 'grey'}}>
          
        </Text>
        </View>
    </View>



    <View style = {[styles.descrp_container, { height:180 , top : '4%'}]}>
      <View style = {{flexDirection : 'column'}}>
        
        <Text style = {{fontSize : 16 , color : '#000' , fontWeight : '600' , marginHorizontal : '2%'}}>
          Bank Details
        </Text>
        <View style = {{flexDirection : 'row' , flex : 1 , marginVertical : '4%'}}>
        
        <AntDesign name = "bank" size = {25} color = '#000'/>

        <Text style = {{fontSize : 16 , margin : '2%',  color : 'grey' , marginHorizontal : '2%'}}>          
        Get 5% instant discount on all prepaid modes up to Rs. 500(per transaction) on 3499/- or above 
        </Text>

        </View>
        <View style = {{alignItems : 'flex-end'}}>
        <Text style = {{ marginHorizontal : '4%' , color : '#2a9c3f'}}> T&C</Text>
        </View>
        </View>

        
        
        <View style = {{flexDirection : 'row' ,top : '2%' , alignItems:'center'  }}>
        <Text style = {{margin : '2%' , fontSize : 15 , fontWeight : '600'}}>
         

        </Text>
        <Text style = {{textDecorationLine : 'line-through' , color : 'grey'}}>
          
        </Text>
        </View>
    </View>

    <View style = {[styles.descrp_container, { height: 200 , top : '4.5%'}]}>
      <View style = {{flexDirection : 'column'}}>
        
      <Text style = {{fontSize : 16 , color : '#000' , fontWeight : '600' , marginHorizontal : '2%'}}>
          Product Details
        </Text>
        <Text style = {{fontSize : 16 , margin : 5 , color : '#000'}}>
           {item.description}
        </Text>
       
        </View>

    </View>

    <View style = {[styles.descrp_container, { height: 200 , top : '5%' , bottom : '2%'}]}>
      <View style = {{flexDirection : 'column'}}>
        
      <Text style = {{fontSize : 16 , color : '#000' , fontWeight : '600' , marginHorizontal : '2%'}}>
          Return
        </Text>
        <Text style = {{fontSize : 16 , margin : 5 , color : '#000'}}>
           Easy 15 days return and exchange . Return policies may vary based on products and promotions .For full details on your Returns Policies.
        </Text>
       
        </View>

    </View>


    </ScrollView>
   
   <View style = {{height : 70 , backgroundColor : 'white' , flexDirection : 'row' ,justifyContent : 'space-around' , alignItems : 'center'}}>
    <View style = {{height : 50 , width : 50 , backgroundColor : '#dee0df' , alignItems : 'center' , justifyContent : 'center', borderRadius : 10 }}>
  <FontAwesome name = "share-square-o" size = {20} color = '#000' />
    </View>

    
    <View style = {{height : 50 , width : 50 , backgroundColor : '#dee0df' , alignItems : 'center' , justifyContent : 'center', borderRadius : 10 }}>
      <TouchableOpacity onPress = {onPressWishlist}>
        <View style = {{height : 50 , width : 50 , backgroundColor : '#dee0df' , alignItems : 'center' , justifyContent : 'center', borderRadius : 10 }}>
  <AntDesign name = "heart" size = {20} color = {indicate? 'red' : 'white'} />
        </View>
      </TouchableOpacity>
    </View>

    
    <Pressable onPress={onAddToCart}>
    
    <View style={{ height: 50, width: 150, backgroundColor: '#dee0df',  alignItems: 'center', justifyContent: 'center', borderRadius: 10 , flexDirection : 'row'}}>
    <Feather name = "shopping-bag" size = {18}/>
    <Text style={{ fontSize: 15, fontWeight: '600' , marginHorizontal : '2%' }}>
      Add of bag
    </Text>
  
</View>
</Pressable>

   

   </View>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  descrp_container:{
    height : '25%',
   
    padding : '2%',
    marginHorizontal : '2%',
    alignItems : 'flex-start',
    backgroundColor : 'white',
    

  },
  root: {
    backgroundColor : 'white',
    top : '1%',
    height : '50%',
    width : '100%'
  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
    
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});

export default Detailed_Wishlish_carousel;

