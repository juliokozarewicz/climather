import React from 'react'

import {
    View,
} from 'react-native';

// import style sheet
import frameoneStyle from './1_style/frameoneStyle';



// index screen function
// -------------------------------------------------------------------------------------
export function FrameOne(props) {

    return (
        
        <>

            {

                props.connection 
                
                ?
                
                    <View style={frameoneStyle.frameoneall}></View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------