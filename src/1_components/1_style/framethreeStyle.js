import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    scrollall: {
      zIndex: 20,

      marginTop: 10,
      
      position:'absolute',
      bottom: 80,
      
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

      backgroundColor: '#8B6DF7',

      borderRadius: 10,

      opacity: 0.5,
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
      top: 3,
  
      width: '90%',

      fontSize: 15,
      fontFamily: 'title',

      color: colors.white,

      textAlign: 'center',

      textTransform: 'capitalize',
    },

    txttop2: {
      position: 'absolute',
      top: 25,
  
      width: '90%',

      fontSize: 10,
      fontFamily: 'title',

      color: colors.gray2,

      textAlign: 'center',
    },

    txttop3: {
      position: 'absolute',
      bottom: 5,
  
      width: '90%',

      fontSize: 9,
      fontFamily: 'title',

      color: colors.white,

      textAlign: 'center',
    },

    txtbottom: {
      position: 'absolute',
      bottom: 18,
  
      width: '90%',

      fontSize: 12,
      fontFamily: 'title',

      color: colors.white,

      textAlign: 'center',

      textTransform: 'capitalize',
    },

    imgcentererro: {
      width: 15,
      height: 15,

      opacity: 0.4,
    },

    imgcenter: {
      position: 'absolute',
      top: 40,

      width: 50,
      height: 50,
    },
  }

);