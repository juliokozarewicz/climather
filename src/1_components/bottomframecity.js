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

                    <View style={bottomframecityStyle.framebottomall} >
                        <View style={bottomframecityStyle.allcontent} >
                            <View style={bottomframecityStyle.backgrdwhi} ></View>

                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                style={bottomframecityStyle.scrollsts}
                            >
                                <View style={bottomframecityStyle.insidescroll} >

                                    <View style={bottomframecityStyle.city}></View>
                                    <View style={bottomframecityStyle.city}></View>
                                    <View style={bottomframecityStyle.city}></View>
                                    <View style={bottomframecityStyle.city}></View>
                                    <View style={bottomframecityStyle.city}></View>
                                    <View style={bottomframecityStyle.city}></View>

                                </View>
                            </ScrollView>


                        </View>
                    </View>

                
                :

                    <View style={bottomframecityStyle.framebottomall}></View>

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------