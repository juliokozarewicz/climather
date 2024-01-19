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

      gap: 10,
      
    },

    backgrblack: {

      width: 80,
      height: '100%',

      backgroundColor: colors.purple,

      borderRadius: 10,

      opacity: 0.7,
    },

  }

);