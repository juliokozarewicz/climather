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

        function loadForecast(date) {

            const diaDoMes = date.getUTCDate();
            

            return diaDoMes;
        };

        return (
            data.map((item, index) => (
                <View style={framethreeStyle.allsquare} key={index}>
                    <View style={framethreeStyle.backgrprp}></View>
                    <View style={framethreeStyle.contenttexts}>
                        <Text style={framethreeStyle.txttop}> {loadForecast(item.list.dt)} </Text>
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
                                loadForecast(props.data.list.slice(1, ))
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