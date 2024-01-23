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

// import func api request
import { getDataWeather } from './0_functions/apirequest';


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

                                                // *****
                                                // ------------------------------------------------------------

                                                const [citiData, setCityData] = useState();


                                                const fetchDataFromApiCities = async (city) => {
                                                    const result = await getDataWeather(city);
                                                    setCityData(result);
                                                };

                                                useEffect(() => {
                                                    fetchDataFromApiCities(item.city); // Chame a função dentro do useEffect ou em outro lugar conforme necessário
                                                  }, []);
                                                // ------------------------------------------------------------

                                                console.log(citiData);

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

                                                            <Image style={bottomframecityStyle.imgtemp2} source={{ uri: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png` }} />

                                                            <Text
                                                                numberOfLines={1}
                                                                ellipsizeMode="tail"
                                                                style={bottomframecityStyle.txtcity}
                                                            >
                                                                {item.city}
                                                            </Text>

                                                            <Text style={bottomframecityStyle.txttemp} >** °</Text>
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
                                    <TouchableOpacity onPress={() => props.setInsertCity(true)} >
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