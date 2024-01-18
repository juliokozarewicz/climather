import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    frameoneall: {
      zIndex: 1000000,
     
      position:'relative',
      top: 70,

      width: '90%',
      height: 200,
      
      alignItems: 'center',

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    temperature: {
      width: '58%',
      height: '100%',
    },

    city: {
      width: '40%',
      height: '100%',
    },

    backgr: {
      position: 'absolute',
      
      width: '100%',
      height: '100%',

      backgroundColor: colors.white,

      borderRadius: 20,

      opacity: 0.4,
    },

    backgr2: {
      position: 'absolute',
      
      width: '100%',
      height: '100%',

      backgroundColor: colors.purple,

      borderRadius: 20,

      opacity: 0.4,
    },

    frametxt1: {
      width: '100%',
      height: '100%',

      alignItems: 'flex-start',
      justifyContent: 'center',

      paddingLeft: 20,
    },

    txtblack1: {
      position: 'absolute',
      top: 30,
      left: 20,
  
      width: '95%',

      fontSize: 11,
      fontFamily: 'text',

      color: colors.black,
    },

    txtpurple: {
      position: 'absolute',
      left: 20,
      bottom: 42,

      fontFamily: 'title',
      color: colors.purple,
      textAlign: 'center',

      fontSize: 80,
    },

    txtblack2: {
      position: 'absolute',
      bottom: 30,
      left: 20,
  
      width: '95%',

      fontSize: 11,
      fontFamily: 'text',

      color: colors.black,
    },

  }

);