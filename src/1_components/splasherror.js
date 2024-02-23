import React from 'react'

import {
    View,
    Text,
    TouchableWithoutFeedback,
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
                        <TouchableWithoutFeedback onPress={ () => {
                                props.setErrorGetData(false);
                                props.reloadViewFunc();
                                }
                            }>
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
                        </TouchableWithoutFeedback>
                    </View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------