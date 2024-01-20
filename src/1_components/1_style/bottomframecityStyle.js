import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    framebottomall: {
      width: '100%',
      height: '100%',
    },

    allcontent: {
      width: '100%',
      height: '100%',
    },

    backgrdwhi: {
      position: 'absolute',

      width: '100%',
      height: '100%',

      backgroundColor: colors.white,

      opacity: 0.5,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    }
  
  }

);