import React from 'react';
import {
    View,
    Text,
} from 'react-native';

// import style sheet
import indexStyle from './1_style/indexStyle';


// External components (INIT)
// ===============================
// ===============================
// External components (END)


// index screen function
// -------------------------------------------------------------------------------------
export function IndexScreen() {

    return (

        <View style={indexStyle.allcontent}>
            <Text style={indexStyle.textexample}>Exemplo de texto, e também outras coisas!</Text>
        </View>
        
    );
    
};
// -------------------------------------------------------------------------------------