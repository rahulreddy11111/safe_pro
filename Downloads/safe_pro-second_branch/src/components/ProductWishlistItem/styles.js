import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main:{
    
    borderWidth: 1,
    borderColor: '#edede8',
    borderRadius: 10,
    backgroundColor: '#fff',
    width : '50%',
    marginVertical : '1%',
    padding : 4,
    resizeMode : 'contain',
    justifyContent : 'center',

  },
  root: {
    flexDirection: 'column',
  },
  image: {
    flex: 2,
    height: 150,
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