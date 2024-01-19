import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    scrollall: {
      zIndex: 1000,

      marginTop: 10,
      
      position:'absolute',
      bottom: 40,
      
      width: '100%',
      height: 130,
    },

    framethreeall: {
      width: '100%',
      height: '100%',
      
      alignItems: 'center',

      flexDirection: 'row',

      paddingLeft: 21,
      paddingRight: 21,

      gap: 10,
    },

    allsquare: {
      position: 'relative',

      width: 80,
      height: '100%',
    },

    backgrprp: {
      width: '100%',
      height: '100%',

      backgroundColor: colors.purple,

      borderRadius: 10,

      opacity: 0.7,
    },

    contenttexts: {
      position: 'absolute',

      width: '100%',
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    txttop: {
      position: 'absolute',
      top: 10,
  
      width: '90%',

      fontSize: 20,
      fontFamily: 'title',

      color: colors.white,

      textAlign: 'center',

      textTransform: 'capitalize',
    },

    txtbottom: {
      position: 'absolute',
      bottom: 10,
  
      width: '90%',

      fontSize: 15,
      fontFamily: 'title',

      color: colors.black,

      textAlign: 'center',

      textTransform: 'capitalize',
    },

    imgcenter: {
      width: 18,
      height: 18,
    },

    imgcentererro: {
      width: 14,
      height: 14,
    },

  }

);