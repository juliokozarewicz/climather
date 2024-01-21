import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    frametwoall: {

      zIndex: 10,

      marginTop: 10,

      position:'relative',
      top: 68,

      width: '90%',
      height: 100,

      alignItems: 'center',
      justifyContent: 'center',

      flexDirection: 'row',

      gap: 10,
    },    

    backgr: {
      position: 'absolute',
      
      width: '100%',
      height: '100%',

      backgroundColor: colors.white,

      borderRadius: 10,

      opacity: 0.5,
    },

    leftside: {
      width: '42%',
      height: '90%',

      justifyContent: 'center',

      gap: 10,
    },

    rightside: {
      width: '42%',
      height: '90%',

      justifyContent: 'center',

      gap: 10,

    },

    linetext: {
      flexDirection: 'row',
    },

    textpurple: {
      fontFamily: 'text',
      color: colors.purple,

      fontSize: 11,

      textTransform: 'capitalize',
    },

    textblack: {
      fontFamily: 'text',
      color: colors.black,

      fontSize: 11,
    },

    noconnection: {
      width: 25,
      height: 25,

      opacity: 0.4,
    },

  }

);