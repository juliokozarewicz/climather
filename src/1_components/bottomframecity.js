import React, {
    useEffect,
    useState,
} from 'react'

import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

// import style sheet
import bottomframecityStyle from './1_style/bottomframecityStyle';


import { API_KEY } from '@env';
const GET_API_KEY = API_KEY;


// index screen function
// -------------------------------------------------------------------------------------
export function BottomFrameCity(props) {

    return (

        <>

            {

                props.connection 

                ?

                    props.menuActivate

                    ?

                        <View style={bottomframecityStyle.framebottomall} >
                            <View style={bottomframecityStyle.allcontent} >
                                <View style={bottomframecityStyle.backgrdwhi} ></View>

                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={bottomframecityStyle.scrollsts}
                                >
                                    <View style={bottomframecityStyle.insidescroll} >
                                        <TouchableOpacity onPress={() => props.setInsertCity(true)} >
                                            <View style={bottomframecityStyle.city2} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <View style={bottomframecityStyle.addcitiadd} ></View>
                                                <View style={bottomframecityStyle.addcitiadd2} ></View>
                                                <Text style={bottomframecityStyle.addcitytxt} >Add City</Text>
                                            </View>
                                        </TouchableOpacity>

                                        {

                                            props.getcity.map((item, index) => {

                                                const [dataCity, setDataCity] = useState(null);

                                                async function getDataWeather2(city) {
                                                    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${GET_API_KEY}`);
                                                    const result = await request.json();
                                                    return result;
                                                }

                                                useEffect(() => {
                                                    getDataWeather2(item.city)
                                                    .then(data => {
                                                        setDataCity(data);
                                                    })
                                                    .catch(error => console.error('Error:', error));
                                                }, [item.city]);

                                                return (

                                                    <TouchableWithoutFeedback key={index} onPress={() => console.log('*** CLICK ***')} >
                                                        <View style={bottomframecityStyle.city} >

                                                            <View style={bottomframecityStyle.backgcity} ></View>

                                                            <TouchableOpacity
                                                                style={bottomframecityStyle.btndel}
                                                                onPress={ () => {
                                                                    props.deleteItemFromDatabase(item.id);
                                                                    props.reloadDB();
                                                                }}
                                                            >
                                                                <Image source={require('./3_img/deleteicon.png')} style={bottomframecityStyle.deleteimg} />
                                                            </TouchableOpacity>

                                                            <Image
                                                                style={dataCity !== null ? bottomframecityStyle.imgtemp2 : bottomframecityStyle.imgtemp2erro}
                                                                source={dataCity !== null ? { uri: `http://openweathermap.org/img/wn/${dataCity.weather[0].icon}@4x.png` } : require('./3_img/noconnectionblue.png')} />

                                                            <Text
                                                                numberOfLines={1}
                                                                ellipsizeMode="tail"
                                                                style={bottomframecityStyle.txtcity}
                                                            >
                                                                {item.city}
                                                            </Text>

                                                            <Text style={bottomframecityStyle.txttemp}>
                                                                {dataCity !== null ? `${Math.ceil(dataCity.main.temp)}°` : '...'}
                                                            </Text>
                                   
                                                        </View>
                                                    </TouchableWithoutFeedback>

                                                )

                                            })

                                        }

                                    </View>
                                </ScrollView>

                            </View>
                        </View>

                    :

                        <View style={bottomframecityStyle.framebottomall} >
                            <View style={bottomframecityStyle.allcontent} >
                                <View style={bottomframecityStyle.backgrdwhi} ></View>
                            </View>
                        </View>

                :

                    props.menuActivate

                    ?

                        <View style={bottomframecityStyle.framebottomall} >
                            <View style={bottomframecityStyle.allcontent} >
                                <View style={bottomframecityStyle.backgrdwhi} ></View>

                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={bottomframecityStyle.scrollsts}
                                >
                                    <TouchableOpacity >
                                        <View style={bottomframecityStyle.city2} >
                                            <View style={bottomframecityStyle.backgcity} ></View>
                                            <View style={bottomframecityStyle.addcitiadd} ></View>
                                            <View style={bottomframecityStyle.addcitiadd2} ></View>
                                            <Text style={bottomframecityStyle.addcitytxt} >Add City</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>


                            </View>
                        </View>

                    :

                        <View style={bottomframecityStyle.framebottomall} >
                            <View style={bottomframecityStyle.allcontent} >
                                <View style={bottomframecityStyle.backgrdwhi} ></View>
                            </View>
                        </View>

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------