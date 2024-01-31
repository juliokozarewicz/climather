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
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                        </View>
                    }

                </View>
            </ScrollView>
        
        :

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={framethreeStyle.scrollall}
        >
            <View style={framethreeStyle.framethreeall} >

                <View style={framethreeStyle.allsquare}>
                    <View style={framethreeStyle.backgrprp}></View>
                    <View style={framethreeStyle.contenttexts}>
                        <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                    </View>
                </View>
            </View>
        </ScrollView>    
    
    );
    
};
// -------------------------------------------------------------------------------------