import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    framebottomall: {
      width: '100%',
      flex: 1,
    },

    allcontent: {
      width: '100%',
      height: '100%',
      
      alignItems: 'center',
    },

    backg: {
      width: '100%',
      height: '100%',
      
      alignItems: 'center',

      backgroundColor: colors.white,
    },
  }

);