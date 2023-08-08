import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 6,
    resizeMode : 'cover',


    
  },

  innerContainer: {
    flexDirection: 'column',
    //backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems : 'center',
  },

  image: {
    height: '70%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius : 60,

    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 7.27,

    elevation: 10,
    
    
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  }
});

export default styles;