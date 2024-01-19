import React from 'react'

import {
    View,
    ScrollView,
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
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={framethreeStyle.scrollall}
                    >
                        <View style={framethreeStyle.framethreeall} >
                            






                            
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>
                            <View style={framethreeStyle.backgrblack}></View>









                        </View>
                    </ScrollView>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------