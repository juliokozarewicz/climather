import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    splashall: {
      zIndex: 100,
     
      position:'absolute',
      top: 50,
      
      width: '100%',
      
      alignItems: 'center',
    },

    msgerror: {
      width: '80%',
      height: 40,
      
      backgroundColor: colors.red,

      borderRadius: 10,

      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'space-between',
    },

    txterro: {
      width: '88%',

      fontSize: 10,
      
      fontFamily: 'text',

      paddingLeft: 20,

      color: colors.gray1,
    },

    txtclose: {
      fontSize: 10,
      
      fontFamily: 'text',

      paddingRight: 15,

      color: colors.gray1,
    },

  }

);