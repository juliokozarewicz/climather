import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    framebottomall: {
      zIndex: 60,

      position: 'absolute',
      bottom: 0,

      width: '100%',
      height: '100%',

      justifyContent: 'flex-end',
    },

    allcontent: {
      zIndex: 40,

      width: '100%',
      height: 200,

      alignItems: 'center',
      justifyContent: 'center',
    },

    allcontentMenuOff: {
      width: '100%',
      height: 40,

      alignItems: 'center',
      justifyContent: 'center',
    },

    backgrdwhi: {
      position: 'absolute',

      width: '100%',
      height: 200,

      backgroundColor: colors.purple,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    allcontentOff: {
      position: 'absolute',
      bottom:0,

      width: '100%',
      height: 40,

      backgroundColor: colors.white,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,

      opacity: 0.3,
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
      width: 100,
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    city2: {
      width: 80,
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    backgcity: {
      width: '100%',
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: colors.black,

      borderRadius: 10,

      opacity: 0.5,
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

    closecities: {
      zIndex: 10,
      position: 'absolute',
      top: -20,

      width: 40,
      height: 40,

      borderRadius: 25,

      backgroundColor: colors.white,
      
      alignItems: 'center',
      justifyContent: 'center',
    },

    closecitiesOFF: {
      zIndex: 10,
      position: 'absolute',
      top: -20,

      width: 40,
      height: 40,

      borderRadius: 25,

      backgroundColor: colors.purple,
      
      alignItems: 'center',
      justifyContent: 'center',
    },

    closeimg: {
      width: 20,
      height: 20,
    },

    backgroundColorBlack: {
      zIndex: 30,
      position: 'absolute',

      width: '100%',
      height: '100%',
      
      backgroundColor: colors.black,

      opacity: 0.7,
    },

  }

);