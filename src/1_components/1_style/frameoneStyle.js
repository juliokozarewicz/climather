import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    frameoneall: {     
      position:'relative',
      top: 70,

      width: '90%',
      height: 180,
      
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

      opacity: 0.7,
    },

    backgr2: {
      position: 'absolute',
      
      width: '100%',
      height: '100%',

      backgroundColor: colors.purple,

      borderRadius: 20,

      opacity: 0.7,
    },

    frametxt1: {
      width: '100%',
      height: '100%',

      alignItems: 'flex-start',
      justifyContent: 'center',

      paddingLeft: 20,
    },

    frametxt1erro: {
      width: '100%',
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    txtblack1: {
      position: 'absolute',
      top: 30,
      left: 20,
  
      width: '95%',

      fontSize: 11,
      fontFamily: 'text',

      color: colors.black,

      textTransform: 'capitalize',
    },

    txtpurple: {
      position: 'absolute',
      left: 20,
      bottom: 51,

      fontFamily: 'title',
      color: colors.purple,
      textAlign: 'center',

      fontSize: 55,
    },

    txtblack2: {
      position: 'absolute',
      bottom: 30,
      left: 20,
  
      width: '95%',

      fontSize: 11,
      fontFamily: 'text',

      color: colors.black,

      textTransform: 'capitalize',
    },

    frametxt2: {
      width: '100%',
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    txtwhite1: {
      position: 'absolute',
      top: 30,
  
      width: '90%',

      fontSize: 11,
      fontFamily: 'text',

      color: colors.white,

      textAlign: 'center',
    },

    txtwhite2: {
      position: 'absolute',
      bottom: 30,
  
      width: '90%',

      fontSize: 11,
      fontFamily: 'text',

      color: colors.white,

      textAlign: 'center',

      textTransform: 'capitalize',
    },

    imgtemp: {
      width: 90,
      height:  90,

    },

    noconnection: {
      width: 30,
      height: 30,
    },

  }

);