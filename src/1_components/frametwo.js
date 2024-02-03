import React from 'react'

import {
    View,
    Text,
    Image,
} from 'react-native';

// import style sheet
import frametwoStyle from './1_style/frametwoStyle';

// translation
import { useTranslation } from 'react-i18next'; // Importe o hook useTranslation
import i18n from './locales/1_i18n';



// index screen function
// -------------------------------------------------------------------------------------
export function FrameTwo(props) {

    const { t } = useTranslation();

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

                    props.data

                    ?
                
                        <View style={frametwoStyle.frametwoall}>
                            <View style={frametwoStyle.backgr} ></View>

                            <View style={frametwoStyle.leftside}>

                                <View style={frametwoStyle.linetext}>
                                    <Text style={frametwoStyle.textpurple}>{t('pressure')}:</Text>
                                    <Text style={frametwoStyle.textblack}>  {props.data.main.pressure} hPa</Text>
                                </View>

                                <View style={frametwoStyle.linetext}>
                                    <Text style={frametwoStyle.textpurple}>{t('humidity')}:</Text>
                                    <Text style={frametwoStyle.textblack}>  {props.data.main.humidity} %</Text>
                                </View>

                                <View style={frametwoStyle.linetext}>
                                    <Text style={frametwoStyle.textpurple}>{t('sunrise')}:</Text>
                                    <Text style={frametwoStyle.textblack}>  {getdateformated(props.data.sys.sunrise)}</Text>
                                </View>

                            </View>
        
                            <View style={frametwoStyle.rightside}>

                                <View style={frametwoStyle.linetext}>
                                    <Text style={frametwoStyle.textpurple}>{t('visibility')}:</Text>
                                    <Text style={frametwoStyle.textblack}>  {props.data.visibility} m</Text>
                                </View>

                                <View style={frametwoStyle.linetext}>
                                    <Text style={frametwoStyle.textpurple}>{t('wind')}:</Text>
                                    <Text style={frametwoStyle.textblack}>  {(props.data.wind.speed * 3.6).toFixed(0)} km/h  [ {props.data.wind.deg}° ]</Text>
                                </View>

                                <View style={frametwoStyle.linetext}>
                                    <Text style={frametwoStyle.textpurple}>{t('sunset')}:</Text>
                                    <Text style={frametwoStyle.textblack}>  {getdateformated(props.data.sys.sunset)}</Text>
                                </View>

                            </View>
                        </View>

                    :

                    <View style={frametwoStyle.frametwoall}>
                        <View style={frametwoStyle.backgr} ></View>
                        <Image source={require('./3_img/noconnection.png')} style={frametwoStyle.noconnection} />
                    </View>
                
                :

                    <View style={frametwoStyle.frametwoall}>
                        <View style={frametwoStyle.backgr} ></View>
                        <Image source={require('./3_img/noconnection.png')} style={frametwoStyle.noconnection} />
                    </View>

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------