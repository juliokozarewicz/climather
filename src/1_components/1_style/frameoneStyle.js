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

      backgroundColor: colors.gray2,
    },

  }

);