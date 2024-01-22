import React from 'react'

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
                                        <TouchableWithoutFeedback onPress={() => console.log('*** CLICK ONE ***')} >
                                            <View style={bottomframecityStyle.city} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <Image source={require('./3_img/deleteicon.png')} style={bottomframecityStyle.deleteimg} />
                                                <Image source={{ uri: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png` }} style={bottomframecityStyle.imgtemp2} />
                                                <Text
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                    style={bottomframecityStyle.txtcity}
                                                >
                                                    Curitiba
                                                </Text>
                                                <Text style={bottomframecityStyle.txttemp} >29°</Text>
                                            </View>
                                        </TouchableWithoutFeedback>












                                        <TouchableWithoutFeedback onPress={() => console.log('*** CLICK TWO ***')} >
                                            <View style={bottomframecityStyle.city} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <Image source={require('./3_img/deleteicon.png')} style={bottomframecityStyle.deleteimg} />
                                                <Image source={{ uri: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png` }} style={bottomframecityStyle.imgtemp2} />
                                                <Text
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                    style={bottomframecityStyle.txtcity}
                                                >
                                                    Curitiba
                                                </Text>
                                                <Text style={bottomframecityStyle.txttemp} >29°</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <TouchableWithoutFeedback onPress={() => console.log('*** CLICK THREE ***')} >
                                            <View style={bottomframecityStyle.city} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <Image source={require('./3_img/deleteicon.png')} style={bottomframecityStyle.deleteimg} />
                                                <Image source={{ uri: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png` }} style={bottomframecityStyle.imgtemp2} />
                                                <Text
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                    style={bottomframecityStyle.txtcity}
                                                >
                                                    Curitiba
                                                </Text>
                                                <Text style={bottomframecityStyle.txttemp} >29°</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <TouchableWithoutFeedback onPress={() => console.log('*** CLICK FOUR ***')} >
                                            <View style={bottomframecityStyle.city} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <Image source={require('./3_img/deleteicon.png')} style={bottomframecityStyle.deleteimg} />
                                                <Image source={{ uri: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png` }} style={bottomframecityStyle.imgtemp2} />
                                                <Text
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                    style={bottomframecityStyle.txtcity}
                                                >
                                                    Curitiba
                                                </Text>
                                                <Text style={bottomframecityStyle.txttemp} >29°</Text>
                                            </View>
                                        </TouchableWithoutFeedback>










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
                                    <View style={bottomframecityStyle.insidescroll} >
                                        <TouchableWithoutFeedback onPress={() => console.log('*** CLICK ONE ***')} >
                                            <View style={bottomframecityStyle.city} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <Image source={require('./3_img/noconnection.png')} style={bottomframecityStyle.noconnection} />
                                            </View>
                                        </TouchableWithoutFeedback>
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

            }
       
        </>
    
    );
    
};
// -------------------------------------------------------------------------------------