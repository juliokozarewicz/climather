import React from 'react'

import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';

// import style sheet
import framethreeStyle from './1_style/framethreeStyle';


// index screen function
// -------------------------------------------------------------------------------------
export function FrameThree(props) {

    function loadForecastData(dateunix, timezone) {

        const dateconv = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'UTC'
        });

        const datetimezone = dateconv.format(new Date(dateunix * 1e3 + timezone * 1e3));

        const day = datetimezone.substring(0, 2);
        //const month = datetimezone.substring(3, 5);
        //const year = datetimezone.substring(6, 8);
        const hours = datetimezone.substring(10, 12);
        //const minutes = datetimezone.substring(13, 15);

        return ({"daymonth": day, "hours": hours});

    };

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
                    Object.keys(props.dataForecast).map((date, index) => (

                        <View style={framethreeStyle.allsquare} key={index}>

                            <View style={framethreeStyle.backgrprp}></View>
                            <Text style={framethreeStyle.txttop}>{date}</Text>

                            <ScrollView style={framethreeStyle.contenttexts} showsVerticalScrollIndicator={false} key={index}>

                                {props.dataForecast[date].map((item, innerIndex) => (

                                    <View style={framethreeStyle.contenttemphori} key={innerIndex}>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={framethreeStyle.txttop2}>** h</Text>
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