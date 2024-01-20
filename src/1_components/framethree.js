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

    function loadForecast(data) {

        function loadForecastData(dateraw) {

            const dateconv = new Date(dateraw * 1000);

            const daymonth = dateconv.getUTCDate();
            //const minutes = dateconv.getUTCMinutes();
            const hours = dateconv.getUTCHours();
            const formattedHours = hours < 10 ? `0${hours}` : hours;

            return ({"daymonth": daymonth, "hours": formattedHours});

        };

        return (
            data.map((item, index) => (
                <View style={framethreeStyle.allsquare} key={index}>
                    <View style={framethreeStyle.backgrprp}></View>
                    <View style={framethreeStyle.contenttexts}>
                        <Text style={framethreeStyle.txttop}>{loadForecastData(item.dt).daymonth}</Text>
                        <Text style={framethreeStyle.txttop2}>{loadForecastData(item.dt).hours} h</Text>
                        <Text style={framethreeStyle.txttop3}>{item.weather[0].main}</Text>
                        <Image source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png` } } style={framethreeStyle.imgcenter} />
                        <Text style={framethreeStyle.txtbottom}>{item.main.temp.toFixed(0)}°</Text>
                    </View>
                </View>
            ))
        );
    };

    return (
        
        <>

            {

                props.connectionF 
                
                ?
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={framethreeStyle.scrollall}
                    >
                        <View style={framethreeStyle.framethreeall} >

                            {
                                loadForecast(props.data.list)
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
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                            <View style={framethreeStyle.contenttexts}>
                                <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                            </View>
                        </View>
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                            <View style={framethreeStyle.contenttexts}>
                                <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                            </View>
                        </View>
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                            <View style={framethreeStyle.contenttexts}>
                                <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                            </View>
                        </View>
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                            <View style={framethreeStyle.contenttexts}>
                                <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                            </View>
                        </View>
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                            <View style={framethreeStyle.contenttexts}>
                                <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                            </View>
                        </View>
                        <View style={framethreeStyle.allsquare}>
                            <View style={framethreeStyle.backgrprp}></View>
                            <View style={framethreeStyle.contenttexts}>
                                <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                            </View>
                        </View>




                    </View>
                </ScrollView>

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------