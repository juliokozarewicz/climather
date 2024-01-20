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

    scrollsts: {
      position: 'absolute',
      bottom: 20,

      width: '100%',
      height: 140,
    },

    insidescroll: {
      width: '100%',
      height: '100%',

      paddingLeft: 21,
      paddingRight: 21,

      flexDirection: 'row',

      gap: 15,
    },

    city: {
      width: 100,
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    backgcity: {
      width: 100,
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: colors.black,

      borderRadius: 10,

      opacity: 0.7,
    },

    deleteimg: {
      position: 'absolute',
      top: 15,

      width: 18,
      height: 18,
    },

    txtcity: {
      position: 'absolute',
      bottom: 30,

      fontFamily: 'title',
      fontSize: 11,

      color: colors.white,
    },

    txttemp: {
      position: 'absolute',
      bottom: 13,

      fontFamily: 'title',
      fontSize: 12,

      color: colors.white,
    },

    imgtemp2: {
      position: 'absolute',
      bottom: 50,

      width: 50,
      height: 50,
    },

  }

);