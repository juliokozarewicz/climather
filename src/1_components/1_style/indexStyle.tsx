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

    statusbar: {
      backgroundColor: colors.purple,
    },







    

    textexample: {
      marginTop: 200,

      fontSize: 15,

      color: colors.purple,

      fontFamily: 'title',
    },

  }

);