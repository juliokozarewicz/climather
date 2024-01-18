import React from 'react'

import {
    View,
} from 'react-native';

// import style sheet
import framethreeStyle from './1_style/framethreeStyle';



// index screen function
// -------------------------------------------------------------------------------------
export function FrameThree(props) {

    return (
        
        <>

            {

                props.connection 
                
                ?
                
                    <View style={framethreeStyle.framethreeall}></View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------