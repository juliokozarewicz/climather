import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    allcontent: {
        width: '100%',
        flex: 1,
        
        alignItems: 'center',
        
        backgroundColor: colors.gray1,
    },

    allscreen: {
      width: '100%',
      flex: 1,
      
      alignItems: 'center',
    },

    statusbar: {
      backgroundColor: colors.purple,
    },

    txtlogo: {
      zIndex: 101,

      position: 'absolute',
      top: 0,

      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 0,
      paddingBottom: 5,

      fontFamily: 'title',
      fontSize: 12,
      letterSpacing: 3,

      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,

      backgroundColor: colors.purple,
      color: colors.white,
    },

    absoluteframe: {
      position: 'absolute',

      width: '100%',
      height: '100%',
    },

    topframe: {
      position: 'relative',

      width: '100%',
      flex: 1,

      alignItems: 'center',
    },

    bottomframe: {
      position: 'relative',

      width: '100%',
      height: 200,

      alignItems: 'center',
    },

    bottomframeClose: {
      position: 'relative',

      width: '100%',
      height: 40,

      alignItems: 'center',
    },

    closecities: {
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

    addnewvity: {
      zIndex: 50,
      position: 'absolute',

      width: '100%',
      height: '100%',
      
      alignItems: 'center',
      justifyContent: 'center',
    },

    backgroundColorBlack: {
      zIndex: 510,
      position: 'absolute',

      width: '100%',
      height: '100%',
      
      backgroundColor: colors.black,

      opacity: 0.7,
    },

    frameinput: {
      zIndex: 510,
      position: 'absolute',
      bottom: 10,

      width: '95%',
      height: 250,
      
      backgroundColor: colors.gray1,

      borderRadius: 15,

      borderWidth: 4,
      borderColor: colors.purple,

      alignItems: 'center',
      justifyContent: 'center',
    },

    txtaddcity: {
      position: 'absolute',
      top: 25,

      fontFamily: 'title',
      fontSize: 20,

      color: colors.purple,
    },

    closeaddcity: {
      position: 'absolute',
      top: -18,
      right: -10,

      width: 35,
      height: 35,

      borderRadius: 25,
      
      backgroundColor: colors.purple,

      alignItems: 'center',
      justifyContent: 'center',
    },

    closeaddcitytxt: {
      position: 'absolute',
      top: -1,

      fontFamily: 'title',
      fontSize: 20,

      color: colors.white,
    },

    txtdesccity: {
      position: 'absolute',
      top: 70,

      fontFamily: 'text',
      fontSize: 9,

      color: colors.gray3,

      width: '85%',
      textAlign: 'center',
    },

    textcitiesadd: {
      display: 'flex',

      position: 'absolute',
      bottom: 75,

      width: '90%',
      height: 50,

      borderWidth: 1,
      borderColor: colors.gray3,
      borderRadius: 10,

      paddingLeft: 15,
      paddingRight: 10,

      color: colors.gray3,
    },

    textcitiesaddFocus: {
      display: 'flex',

      position: 'absolute',
      bottom: 75,

      width: '90%',
      height: 50,

      borderWidth: 1,
      borderColor: colors.blue,
      borderRadius: 10,

      paddingLeft: 15,
      paddingRight: 10,

      color: colors.black
    },

    placeholdertextcolor: {
      color: colors.gray3,
    },

    btnsend: {
      position: 'absolute',
      bottom: 15,

      width: '90%',
      height: 50,

      borderRadius: 10,
      
      backgroundColor: colors.purple,

      alignItems: 'center',
      justifyContent: 'center',
    },

    sendbtntxt: {
      fontFamily: 'title',
      fontSize: 15,

      color: colors.white,
    },

    loadingpage: {
      zIndex: 100,
      position: 'absolute',

      width: '100%',
      height: '100%',
      
      alignItems: 'center',
      justifyContent: 'center',
    },

    loadback: {
      position: 'absolute',

      width: '100%',
      height: '100%',
      
      backgroundColor: colors.black,

      opacity: 0.7,
    },

    logoload: {
      zIndex: 102,

      position: 'absolute',


      fontFamily: 'title',
      fontSize: 25,
      letterSpacing: 3,

      color: colors.white,

      opacity: 0.4,

      textTransform: 'uppercase',
    },

    allcricle: {
      position: 'absolute',
      bottom: 20,

      width: 80,
      height: 80,

      borderRadius: 50,
      
      alignItems: 'center',
      justifyContent: 'center',

      flexDirection: 'row',

      gap: 10,
    },

    circle: {
      width: 8,
      height: 8,
      
      backgroundColor: colors.white,

      borderRadius: 50,
    },

  }

);