
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    flexDirection : 'row',
    
   
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: '80%',
    width : '30%',
    padding : 50,
    resizeMode: 'contain',
    margin : '1%',
    
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection : 'row',
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
  quantityContainer: {
    margin: 5,
  },
});

export default styles;