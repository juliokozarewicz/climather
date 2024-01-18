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

    function getdateformated(request) {

        const timestamp = request * 1000;
        const data = new Date(timestamp);
        const horas = data.getHours();
        const minutos = data.getMinutes();

        return (
            horas + ':' + (minutos < 10 ? '0' : '') + minutos + ' h'
        );
    };

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
                                <Text style={frametwoStyle.textblack}>  {getdateformated(props.data.sys.sunrise)}</Text>
                            </View>

                        </View>
    
                        <View style={frametwoStyle.rightside}>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>visibility:</Text>
                                <Text style={frametwoStyle.textblack}>  {props.data.visibility} m</Text>
                            </View>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>wind:</Text>
                                <Text style={frametwoStyle.textblack}>  {props.data.wind.speed * 3.6} km/h | {props.data.wind.deg}°</Text>
                            </View>

                            <View style={frametwoStyle.linetext}>
                                <Text style={frametwoStyle.textpurple}>sunset:</Text>
                                <Text style={frametwoStyle.textblack}>  {getdateformated(props.data.sys.sunset)}</Text>
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