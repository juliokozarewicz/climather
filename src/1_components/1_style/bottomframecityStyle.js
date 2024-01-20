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

      alignItems: 'center',
      justifyContent: 'center',
    },

    backgrdwhi: {
      position: 'absolute',

      width: '100%',
      height: '100%',

      backgroundColor: colors.white,

      opacity: 0.5,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    contentcities: {
      position: 'absolute',
      bottom: 20,

      width: '100%',
      height: 140,

      paddingLeft: 25,

      flexDirection: 'row',

      gap: 15,
    },

    city: {
      width: 100,
      height: '100%',

      backgroundColor: colors.black,

      borderRadius: 10,

      opacity: 0.7,
    },
  
  }

);