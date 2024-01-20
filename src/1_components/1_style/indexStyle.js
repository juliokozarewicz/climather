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
      zIndex: 10,

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

  }

);