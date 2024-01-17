import React, {
    useState,
} from 'react';

import {
    View,
    Text,
} from 'react-native';

// import style sheet
import splasherrorStyle from './1_style/splasherrorStyle';



// index screen function
// -------------------------------------------------------------------------------------
export function SplashError(props) {

    return (
        
        <>

            {

                props.errorGetData 
                
                ?
                
                    <View style={splasherrorStyle.splashall}>
                        <View style={splasherrorStyle.msgerror}>
                            <Text
                                style={splasherrorStyle.txterro}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {props.errorGetDataMSG}
                            </Text>
                            <Text style={splasherrorStyle.txtclose}>x</Text>
                        </View>
                    </View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------