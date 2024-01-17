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

    textexample: {
      marginTop: 200,

      fontSize: 30,

      color: colors.gray5,

      fontFamily: 'title',
    },

  }

);