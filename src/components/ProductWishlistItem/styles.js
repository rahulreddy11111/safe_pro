import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#edede8',
    borderRadius: 10,
    backgroundColor: '#fff',
    width : '50%',
    marginVertical : '1%',
    padding : 10,
    resizeMode : 'cover',
    justifyContent : 'center',
    
  },
  image: {
    flex: 2,
    height: 160,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 5,
    flex: 2,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  heartIcon: {
   resizeMode : 'cover',
   //backgroundColor: 'black',

    
    
  },
  
});

export default styles;