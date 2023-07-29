import 'core-js/full/symbol/async-iterator';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore, Auth } from 'aws-amplify';
import ProductItem from '../../components/ProductWishlistItem';
import { Product, CartProduct } from '../../models';
//import product from '../../data/product';

const ProductWishlistScreen = ({ searchValue }: { searchValue: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  //const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  //const [quantity, setQuantity] = useState(1);
  //const [cartProduct, setCartProduct] = useState<CartProduct | null>(null);

  const route = useRoute();

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        // Fetch CartProduct data where wishlist is true
        const cartProducts = await DataStore.query(CartProduct);
        const wishlistCartProducts = cartProducts.filter((cp) => cp.wishlist === true);

        // Extract the productIDs from the filtered CartProduct data
        const productIds = wishlistCartProducts.map((cp) => cp.productID);

        // Fetch the corresponding Product data using the productIDs
        const wishlistProducts = await Promise.all(
          productIds.map((productId) => DataStore.query(Product, productId))
        );

        setProducts(wishlistProducts);
      } catch (error) {
        console.error('Error fetching wishlist products:', error);
      }
    };
    
    

    fetchWishlistProducts();
  }, []);

 

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = (windowWidth - 30) / 2;

  const renderProductItems = () => {
    const numColumns = 2;
    const numRows = Math.ceil(products.length / numColumns);
    const rows = Array.from(Array(numRows), (_, rowIndex) => {
      const startIndex = rowIndex * numColumns;
      const endIndex = startIndex + numColumns;
      return products.slice(startIndex, endIndex);
    });

    
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            style={{ width: itemWidth }}
            //cartProduct={cartProduct}
            //onPress={() => addToCart(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

});

export default ProductWishlistScreen;


