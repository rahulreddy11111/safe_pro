import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    marginHorizontal: 10,
    height : 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    //top: 50,
    zIndex: 100,
    marginVertical : '5%'
    

  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color : '#606962'
  },
  productPlaceholder: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 1,
    borderRadius: 1,
    //borderWidth: 0.2,
    
    justifyContent : 'center',
  },
  productTitle: {
    height:30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer : {
    height : '20%',
    justifyContent : 'center',
    marginHorizontal : '5%',
    width : '100%'
    
  },
  searchInput : {
    fontSize : 18,
    
  },
});

export default styles;