import React from 'react'

import {
    View,
    Text,
} from 'react-native';

// import style sheet
import frametwoStyle from './1_style/frametwoStyle';



// index screen function
// -------------------------------------------------------------------------------------
export function FrameTwo(props) {

    //const timestamp = props.data.sys.sunrise * 1000;
    //const data = new Date(timestamp);
    //const horas = data.getHours();
    //const minutos = data.getMinutes();

    return (
        
        <>

            {

                props.connection 
                
                ?
                
                    <View style={frametwoStyle.frametwoall}>
                        <View style={frametwoStyle.backgr} ></View>

                        <View style={frametwoStyle.leftside}>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>pressure:</Text>
                                <Text style={frametwoStyle.textblack}>  {props.data.main.pressure} hPa</Text>
                            </View>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>humidity:</Text>
                                <Text style={frametwoStyle.textblack}>  {props.data.main.humidity} %</Text>
                            </View>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>sunrise:</Text>
                                <Text style={frametwoStyle.textblack}>  ****** h</Text>
                            </View>

                        </View>
    
                        <View style={frametwoStyle.rightside}>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>visibility:</Text>
                                <Text style={frametwoStyle.textblack}> valor</Text>
                            </View>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>wind:</Text>
                                <Text style={frametwoStyle.textblack}> valor</Text>
                            </View>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>sunset:</Text>
                                <Text style={frametwoStyle.textblack}> valor</Text>
                            </View>

                        </View>
                    </View>
                
                :

                    null

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------