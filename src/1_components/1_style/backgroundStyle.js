import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    background: {
      zIndex: 1,

      position: 'absolute',
      top: 0,
      
      width: '100%',
      height: '100%',
      
      alignItems: 'center',

      backgroundColor: colors.purple,
    },

    imgbackground: {
      width: '100%',
      flex: 1,

      resizeMode: 'cover',

      justifyContent: 'center',
    },

  }

);