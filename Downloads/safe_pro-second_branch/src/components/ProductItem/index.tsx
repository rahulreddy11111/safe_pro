import React, { useState } from 'react';
import { Image, View, Text, Pressable, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    navigation.navigate('DetailedProduct', { item, isLiked: likedItems[item.id] || false });
  };
  
  const onPressHeart = () => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [item.id]: !prevLikedItems[item.id],
    }));
  };

  const isLiked = likedItems[item.id] || false;

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View
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
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
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
  );
};

export default ProductItem;
