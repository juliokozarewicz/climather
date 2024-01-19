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

                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}></View>
                                <View style={framethreeStyle.contenttexts}>
                                    <Text style={framethreeStyle.txttop}>19</Text>
                                    <Image source={require('./3_img/noconnectionblue.png')} style={framethreeStyle.imgcentererro} />
                                    <Text style={framethreeStyle.txtbottom}>26°</Text>
                                </View>
                            </View>








                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}>
                                </View>
                            </View>

                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}>
                                </View>
                            </View>

                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}>
                                </View>
                            </View>

                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}>
                                </View>
                            </View>
                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}>
                                </View>
                            </View>
                            <View style={framethreeStyle.allsquare}>
                                <View style={framethreeStyle.backgrprp}>
                                </View>
                            </View>









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