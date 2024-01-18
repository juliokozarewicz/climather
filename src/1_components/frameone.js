import React from 'react'

import {
    View,
    Text,
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
                
                    <View style={frameoneStyle.frameoneall}>

                        <View style={frameoneStyle.temperature}>
                            <View style={frameoneStyle.backgr} ></View>
                            <View style={frameoneStyle.frametxt1} >

                                <Text
                                    style={frameoneStyle.txtblack1}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    Now [ Min: { Math.floor(props.data.main.temp_min) }° | Max: {Math.floor(props.data.main.temp_max) }° ]
                                </Text>

                                <Text
                                    style={frameoneStyle.txtpurple}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    { Math.ceil(props.data.main.temp) }°
                                </Text>

                                <Text
                                    style={frameoneStyle.txtblack2}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    Fells like: {Math.ceil(props.data.main.feels_like)}°
                                </Text>

                            </View>
                        </View>

                        <View style={frameoneStyle.city}>
                            <View style={frameoneStyle.backgr2} ></View>
                            <View></View>
                        </View>

                    </View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------