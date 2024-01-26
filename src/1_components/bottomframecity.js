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

    // img menu
    // -------------------------------------------------------------------------------------
    const imagePath = props.menuActivate ? require('./3_img/tobottom.png') : require('./3_img/totop.png');
    // -------------------------------------------------------------------------------------

    return (

        <>

            {
                props.menuActivate

                ?

                    <View style={bottomframecityStyle.framebottomall} >

                        <TouchableWithoutFeedback
                            style={bottomframecityStyle.backgroundColorBlack.zIndex}

                            onPress={ () => {
                                props.setMenuActivate(false);
                            }}
                        >
                            <View style={bottomframecityStyle.backgroundColorBlack}></View>
                        </TouchableWithoutFeedback>

                        <View style={bottomframecityStyle.allcontent} >

                            <TouchableOpacity 
                                style={bottomframecityStyle.closecities}
                                onPress={() => props.menuActivate ? props.setMenuActivate(false) : props.setMenuActivate(true)}
                            >
                                <Image
                                    source={imagePath}
                                    style={bottomframecityStyle.closeimg}
                                />
                            </TouchableOpacity>

                            <View style={bottomframecityStyle.backgrdwhi} ></View>

                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                style={bottomframecityStyle.scrollsts}
                            >
                                <View style={bottomframecityStyle.insidescroll} >
                                    <TouchableOpacity onPress={() => {props.setInsertCity(true); props.setMenuActivate(false);} } >
                                        <View style={bottomframecityStyle.city2} >
                                            <View style={bottomframecityStyle.backgcity} ></View>
                                            <View style={bottomframecityStyle.addcitiadd} ></View>
                                            <View style={bottomframecityStyle.addcitiadd2} ></View>
                                            <Text style={bottomframecityStyle.addcitytxt} >Add City</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {

                                        props.getcity.map((item, index) => {

                                            return (

                                                <TouchableWithoutFeedback
                                                    key={index}
                                                    onPress={() => {
                                                        props.setloading(true);
                                                        props.setinitcity(item.city);
                                                        props.reloadViewFunc();
                                                        props.setMenuActivate(false);
                                                    }} >

                                                    <View style={bottomframecityStyle.city} >

                                                        <View style={bottomframecityStyle.backgcity} ></View>

                                                        <TouchableOpacity
                                                            style={bottomframecityStyle.btndel}
                                                            onPress={ () => {
                                                                props.deleteItemFromDatabase(item.id);
                                                                props.reloadViewFunc();
                                                                props.setMenuActivate(false);
                                                            }}
                                                        >
                                                            <Image source={require('./3_img/deleteicon.png')} style={bottomframecityStyle.deleteimg} />
                                                        </TouchableOpacity>

                                                        <Image style={bottomframecityStyle.imgtemp2} source={{ uri: `http://openweathermap.org/img/wn/${item.icon}@4x.png` }} />

                                                        <Text
                                                            numberOfLines={1}
                                                            ellipsizeMode="tail"
                                                            style={bottomframecityStyle.txtcity}
                                                        >
                                                            {item.city}
                                                        </Text>

                                                        <Text style={bottomframecityStyle.txttemp} >{Math.ceil(item.temp)}°</Text>
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

                    <View style={bottomframecityStyle.framebottomallOFF} >
                        <View style={bottomframecityStyle.allcontentMenuOff} >
                            <TouchableOpacity 
                                style={bottomframecityStyle.closecitiesOFF}
                                onPress={() => props.menuActivate ? props.setMenuActivate(false) : props.setMenuActivate(true)}
                            >
                                <Image
                                    source={imagePath}
                                    style={bottomframecityStyle.closeimg}
                                />
                            </TouchableOpacity>
                            <View style={bottomframecityStyle.allcontentOff} ></View>
                        </View>
                    </View>

            }

        </>

    );

};
// -------------------------------------------------------------------------------------