import React from 'react'

import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';

// import style sheet
import framethreeStyle from './1_style/framethreeStyle';

// unix dt convert
import {loadForecastData} from './0_functions/unixdatetimeconvert'


// index screen function
// -------------------------------------------------------------------------------------
export function FrameThree(props) {

    return (

        props.connectionF 
        
        ?
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={framethreeStyle.scrollall}
            >
                <View style={framethreeStyle.framethreeall} >

                {
                    Object.keys(props.dataForecast.dataReduced).map((date, index) => (

                        <View style={framethreeStyle.allsquare} key={index}>

                            <View style={framethreeStyle.backgrprp}></View>
                            <Text style={framethreeStyle.txttop}>{date}</Text>

                            <ScrollView style={framethreeStyle.contenttexts} showsVerticalScrollIndicator={false} key={index}>

                                {props.dataForecast.dataReduced[date].map((item, innerIndex) => (

                                    <View style={framethreeStyle.contenttemphori} key={innerIndex}>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={framethreeStyle.txttop2}>{`${String(new Date((item.dt + props.dataForecast.timezone) * 1000).getHours()).padStart(2, '0')} h`}</Text>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={framethreeStyle.txtbottom}>{Math.ceil(item.main.temp)}°</Text>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={framethreeStyle.txttop3}>{item.weather[0].description}</Text>
                                        <Image source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png` }} style={framethreeStyle.imgcenter} />
                                    </View>

                                ))}

                            </ScrollView>
                
                        </View>
                    ))

                }


                </View>
            </ScrollView>
        
        :

        <View
            horizontal
            showsHorizontalScrollIndicator={false}
            style={framethreeStyle.scrollall}
        >
            <View style={framethreeStyle.framethreeallerror} >

                <View style={framethreeStyle.allsquare}>
                    <View style={framethreeStyle.backgrprp}></View>
                    <View style={framethreeStyle.contenttextserror}>
                        <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                    </View>
                </View>
            </View>
        </View>    
    
    );
    
};
// -------------------------------------------------------------------------------------