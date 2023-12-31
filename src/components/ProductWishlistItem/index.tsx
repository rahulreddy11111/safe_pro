import React, { useState } from 'react';
import { Image, View, Text, Pressable, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image?: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
    images? : string;
    description : string;
    options? : string;
  };
}

const ProductItem = ({ item }: ProductItemProps) => {
  const navigation = useNavigation();
  const [likedItems, setLikedItems] = useState<{ [id: string]: boolean }>({});

  const onPress = () => {
    navigation.navigate('DetailedwishlistProduct', { item, isLiked: likedItems[item.id] || false });
  };
  
  const onPressHeart = () => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [item.id]: !prevLikedItems[item.id],
    }));
  };
  
  const isLiked = likedItems[item.id] || false;

  return (
    <View style = {styles.main}>
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      {/* <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: '#ebe9df',
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <TouchableOpacity onPress={onPressHeart}>
          <AntDesign
            name="heart"
            size={18}
            color={isLiked ? '#f70566' : 'white'}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View> */}
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
        
      </View>
    </Pressable>
   


   <View style = {{ flexDirection : 'row' }}>

    <View style = {{height : 50 , width : '25%' , backgroundColor : '#dee0df' , alignItems : 'center' , justifyContent : 'center', borderRadius : 10 , marginHorizontal : '3%' }}>
      <TouchableOpacity 
      //onPress = {onPressWishlist}
      >
        <View style = {{height : 50 , width : 40 , backgroundColor : '#dee0df' , alignItems : 'center' , justifyContent : 'center', borderRadius : 10 }}>
  <AntDesign name = "delete" size = {20} color = {'#000'} />
        </View>
      </TouchableOpacity>
    </View>

    
    <Pressable 
    //onPress={onAddToCart}
    >
    <View style={{ height: 50, width: '90%', backgroundColor: '#dee0df',  alignItems: 'center', justifyContent: 'center', borderRadius: 10 , flexDirection : 'row' , marginHorizontal : '0.5%' }}>
      
    <Feather name = "shopping-bag" size = {14}/>

    <Text style={{ fontSize: 15, fontWeight: '600' , margin : '1%' }}>
      Add to bag
    </Text>

    
  
    </View>
</Pressable>

</View>
   
  
    </View>
  );
};

export default ProductItem;
