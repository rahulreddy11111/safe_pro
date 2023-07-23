import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
import styles from './styles.js';
//import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  //const navigation = useNavigation();

 

  return (
<Pressable style={[styles.container, { width: width - 300}]}>
      
      <View style={styles.innerContainer}>
        {/* Image  */}
       
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />
        
        <View style =  {{ marginHorizontal: 2}}>

        <Text style={styles.bedrooms}>
            {post.bedroom} bedroom
          </Text>
        
          </View>

      </View>
     
     

    </Pressable>
  );
};

export default Post;