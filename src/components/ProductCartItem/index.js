import React from 'react';
import {Image, View, Text, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuantitySelector from '../QuantitySelector';
import { CartProduct } from '../../models';
import {DataStore} from 'aws-amplify';

interface CartProductItemProps{
  cartItem: CartProduct;
 //onQuantityChange: (newQuantity: number) => void; 
}

 const ProductCartItem = ({cartItem , onQuantityChange }: CartProductItemProps) => {
  console.log(cartItem);
  const {product, ...cartProduct} = cartItem;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('DetailedProduct', {item: product, isLiked: cartProduct.wishlist });
  };

  const updateQuantity = async (newQuantity) => {
    const original = await DataStore.query(CartProduct, cartProduct.id);

    await DataStore.save(
      CartProduct.copyOf(original, updated => {
        updated.quantity = newQuantity;
      }),
    );
  };

  

  return (
     
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {product.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${product.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{product.ratings}</Text>
        </View>

        <View style = {{flexDirection : 'row'}}>
          <Text style={styles.price}>
          {product.price && (
            <Text style={styles.price}> ${product.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
           
        <Text style={styles.price}>
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
          )}
        </Text>

        </View>

        <View>

          <QuantitySelector quantity={cartProduct.quantity}
          setQuantity={updateQuantity}/>
        </View>
        
      </View>
    </Pressable>
    
  
  
  );
};

export default ProductCartItem;