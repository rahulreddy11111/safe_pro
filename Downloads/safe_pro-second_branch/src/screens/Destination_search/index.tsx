import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';
import styles from './styles';

const Destination_Search = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await DataStore.query(Product);
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Filter the products based on the searchValue
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor : '#d4d9d6', height : '100%' }} >
        <View style = {{height : '8%' , width : '100%' , justifyContent : 'center' , backgroundColor : '#fff'  ,borderRadius : 3  , margin: '1%' }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search the best by Product , Brand & more ..."
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.productPlaceholder}>
            <Text style={styles.productTitle}>{item.title}</Text>
            {/* <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text> */}
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
      
    </SafeAreaView>
  );
};

export default Destination_Search;
