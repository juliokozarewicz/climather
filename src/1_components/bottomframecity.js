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
                                        <TouchableOpacity onPress={() => props.setInsertCity(true)} >
                                            <View style={bottomframecityStyle.city2} >
                                                <View style={bottomframecityStyle.backgcity} ></View>
                                                <View style={bottomframecityStyle.addcitiadd} ></View>
                                                <View style={bottomframecityStyle.addcitiadd2} ></View>
                                                <Text style={bottomframecityStyle.addcitytxt} >Add City</Text>
                                            </View>
                                        </TouchableOpacity>

                                        {

                                            props.getcity.map((item, index) => (
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

                                                        <Image source={{ uri: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png` }} style={bottomframecityStyle.imgtemp2} />

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
                                            ))

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