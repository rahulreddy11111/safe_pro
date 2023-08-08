import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {View , Text , FlatList , useWindowDimensions} from 'react-native';
import feed from '../../../assets/data/feed';
//import Post from '../../components/Post/index';
import PostCarouselItem from '../../components/PostCarouselItem';



const SearchResults = (props) => {
    const width = useWindowDimensions().width;
    
    
    return (
     

     <View style={{position: 'absolute', top : 100  }}>
        <FlatList 
        data = {feed}
        renderItem={({item}) => <PostCarouselItem post = {item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
       
        />
     </View>

     

     
    
    );
};

export default SearchResults;
