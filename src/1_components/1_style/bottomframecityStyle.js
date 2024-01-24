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

      opacity: 0.3,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    scrollsts: {
      position: 'absolute',
      bottom: 20,

      height: 135,
    },

    insidescroll: {
      width: '100%',
      height: '100%',

      paddingLeft: 21,
      paddingRight: 21,

      flexDirection: 'row',

      gap: 10,
    },

    city: {
      width: 90,
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    city2: {
      width: 90,
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    backgcity: {
      width: '100%',
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: colors.purple,

      borderRadius: 10,

      opacity: 0.4,
    },

    deleteimg: {
      position: 'absolute',

      width: 18,
      height: 18,
    },

    txtcity: {
      position: 'absolute',
      bottom: 30,

      width: '90%',
      textAlign: 'center',

      fontFamily: 'title',
      fontSize: 10,

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
      bottom: 45,

      width: 50,
      height: 50,
    },

    imgtemp2erro: {
      position: 'absolute',
      bottom: 60,

      width: 20,
      height: 20,
    },

    noconnection: {
      position: 'absolute',

      width: 25,
      height: 25,

      opacity: 0.4,
    },

    addcitiadd: {
      position: 'absolute',

      width: 20,
      height: 2,

      backgroundColor: colors.white,

      opacity: 0.7,
    },

    addcitiadd2: {
      position: 'absolute',

      width: 20,
      height: 2,

      backgroundColor: colors.white,

      transform: [{ rotate: '90deg' }],

      opacity: 0.7,
    },

    addcitytxt: {
      position: 'absolute',
      bottom: 20,

      width: '100%',
      textAlign: 'center',

      fontFamily: 'text',
      fontSize: 9,

      color: colors.white,
    },

    btndel: {  
      position: 'absolute',
      top: 15,

      width: '100%',
      height: 20,  

      alignItems: 'center',
    },

  }

);