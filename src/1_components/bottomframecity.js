import React from 'react'

import {
    View,
    ScrollView,
    Text,
} from 'react-native';

// import style sheet
import bottomframecityStyle from './1_style/bottomframecityStyle';



// index screen function
// -------------------------------------------------------------------------------------
export function BottomFrameCity(props) {

    return (

        <>

            {

                props.connection 
                
                ?

                    <View style={bottomframecityStyle.framebottomall}>
                        <View style={bottomframecityStyle.allcontent}>
                            <View style={bottomframecityStyle.backgrdwhi}></View>
                        </View>
                    </View>

                
                :

                    <View style={bottomframecityStyle.framebottomall}></View>

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------