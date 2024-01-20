import React from 'react'

import {
    View,
    ScrollView,
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
                    <ScrollView style={bottomframecityStyle.framebottomall} >
                        <View style={bottomframecityStyle.allcontent}>
                            <View style={bottomframecityStyle.backg}></View>
                        </View>
                    </ScrollView>
                
                :

                <View style={bottomframecityStyle.framebottomall}></View>

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------