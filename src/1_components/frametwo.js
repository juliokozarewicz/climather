import React from 'react'

import {
    View,
} from 'react-native';

// import style sheet
import frametwoStyle from './1_style/frametwoStyle';



// index screen function
// -------------------------------------------------------------------------------------
export function FrameTwo(props) {

    return (
        
        <>

            {

                props.connection 
                
                ?
                
                    <View style={frametwoStyle.frametwoall}></View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------