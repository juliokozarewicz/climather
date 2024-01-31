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

      width: 250,
      height: 200,

      alignItems: 'center',
      justifyContent: 'center'
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
      top: 60,

      width: '100%',
      height: 120,

    },

    txttop: {
      position: 'absolute',
      top: 15,
  
      width: '90%',

      fontSize: 20,
      fontFamily: 'title',

      color: colors.white,

      textAlign: 'center',

      textTransform: 'capitalize',
    },

    txttop2: {
      fontSize: 10,
      fontFamily: 'title',

      color: colors.gray2,

      marginLeft: 30,
    },

    txttop3: {
      fontSize: 10,
      fontFamily: 'title',

      color: colors.gray2,
    },

    txtbottom: {
      fontSize: 10,
      fontFamily: 'title',

      color: colors.gray2,
    },

    imgcentererro: {
      width: 15,
      height: 15,

      opacity: 0.4,
    },

    imgcenter: {
      width: 30,
      height: 30,

      marginRight: 30,
    },

    contenttemphori: {
      position: 'relative',

      flexDirection: 'row',

      width: '100%',

      alignItems: 'center',
      justifyContent: 'space-between',

      gap: 20,
    },

  }

);