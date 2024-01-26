// React
import React, {
    useEffect,
    useState,
} from 'react'

import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native';

// import style sheet
import indexStyle from './1_style/indexStyle';

// import func api request
import { getDataWeather, getDataForecast} from './0_functions/apirequest';

// database
import {CreateItemDataBase, ReadDataBase, deleteItemFromDatabase} from './0_functions/CRUD'


// External components (INIT)
// ===============================

import {SplashError} from './splasherror';
import {BackgroundScreen} from './background';
import {FrameOne} from './frameone';
import {FrameTwo} from './frametwo';
import {FrameThree} from './framethree';
import {BottomFrameCity} from './bottomframecity';

// ===============================
// External components (END)


// index screen function
// -------------------------------------------------------------------------------------
export function IndexScreen() {

    // states
    // -------------------------------------------------------------------------------------

        // request api data
        const [data, setData] = useState();
        const [dataForecast, setDataForecast] = useState();
        const [connection, setConnection] = useState(false);
        const [connectionF, setConnectionF] = useState(false);
        const [errorGetData, setErrorGetData] = useState(false);
        const [errorGetDataMSG, setErrorGetDataMSG] = useState('');
        const [reloadDataAPI, setReloadDataAPI] = useState(0);

        // cities
        const [getcity, setGetcity] = useState([]);
        const [citytext, setCitytext] = useState('');
        const [insertCity, setInsertCity] = useState(false);
        const [initcity, setinitcity] = useState('New York, US');

        // menu
        const [menuActivate, setMenuActivate] = useState(false);

        // input city colors
        const [inputFocused, setInputFocused] = useState(false);

        // loadingpage
        const [loading, setloading] = useState(true);

    // -------------------------------------------------------------------------------------

    // reload
    // -------------------------------------------------------------------------------------
    const reloadViewFunc = () => {
        setReloadDataAPI(prevFlag => prevFlag + 1);
    };
    // -------------------------------------------------------------------------------------
    
    // Data api from Db
    // -------------------------------------------------------------------------------------
    useEffect(() => {

        const fetchDataFromApiDB = async (city) => {

            const resultDB = await getDataWeather(city);

            if (resultDB && resultDB.cod == '200') {
                setErrorGetData(false);
                setConnection(true);
                return resultDB;
            
            } else {
                setErrorGetData(true);
                setConnection(false);
                setErrorGetDataMSG('Communication failure: Cities data.');
            };

        };

        const fetchDataBase = async () => {

            try {
                const result = await ReadDataBase();
        
                const dataDictArray = [];
        
                for (const item of result) {

                    const citiData = await fetchDataFromApiDB(item.city);
        
                    if (citiData && citiData.name && citiData.main && citiData.main.temp) {

                        const dataReturn = {
                            "id": item.id,
                            "city": item.city,
                            "temp": citiData.main.temp,
                            "icon": citiData.weather[0].icon,
                        };
        
                        dataDictArray.push(dataReturn);

                    } else {
                        deleteItemFromDatabase(item.id);
                    }
                }
        
                setGetcity(dataDictArray);
        
            } catch (error) {

                console.error(error);

            }
        };

        fetchDataBase();
    }, [reloadDataAPI]);
    // -------------------------------------------------------------------------------------

    // api request
    // -------------------------------------------------------------------------------------
    useEffect(() => {

        const fetchDataFromApi = async (city) => {

            try {

                const result = await getDataWeather(city);

                if (result && result.cod == '200') {
                    setErrorGetData(false);
                    setData(result);
                    setConnection(true);

                } else {
                    const result = await getDataWeather('New York, US');
                    setData(result);

                };

            } catch {
                setErrorGetData(true);
                setConnection(false);
                setErrorGetDataMSG('Communication failure: Weather.');
            }

        };

        const fetchForecast = async (city) => {
            
            try {
                const dataForecast = await getDataForecast(city);

                if (dataForecast && dataForecast.cod == '200') {
                
                    setDataForecast(dataForecast);
                    setConnectionF(true);
    
                } else {
    
                    const dataForecast = await getDataForecast('New York, US');
                    setDataForecast(dataForecast);

                };

            } catch {
                setConnectionF(false);
                setErrorGetData(true);
                setErrorGetDataMSG('Communication failure: Forecast.');
            } 

        };

        fetchDataFromApi(initcity);
        fetchForecast(initcity);

    }, [reloadDataAPI]);
    // -------------------------------------------------------------------------------------
    
    // loadscreen
    // -------------------------------------------------------------------------------------
    function LoadingScreen (props) {

        useEffect(() => {
            const timer = setTimeout(() => {
                props.setloading(false);
            }, 1000);

            return () => clearTimeout(timer);
          }, []);

        return(

            loading

            ?
                <View style={indexStyle.loadingpage}>
                    <View style={indexStyle.loadback}></View>
                    <Text style={indexStyle.logoload} >loading</Text>
                    
                    <View style={indexStyle.allcricle}>
                        <View style={[indexStyle.circle]}></View>
                        <View style={[indexStyle.circle]}></View>
                        <View style={[indexStyle.circle]}></View>
                        <View style={[indexStyle.circle]}></View>
                    </View>

                </View>

            :
                null
        )

    }
    // -------------------------------------------------------------------------------------
    
    
    return (

        <View style={indexStyle.allcontent}>
  
            <SplashError
                errorGetData={errorGetData}
                setErrorGetData={setErrorGetData} 
                
                errorGetDataMSG={errorGetDataMSG}
                
                reloadViewFunc={reloadViewFunc}
            />

            <SafeAreaView style={indexStyle.allscreen} key={reloadDataAPI}>

                <Text style={indexStyle.txtlogo} >CLIMATHER</Text>

                <StatusBar barStyle="light-content" backgroundColor={indexStyle.statusbar.backgroundColor} />

                <BackgroundScreen connection={connection} data={data}/>

                <View style={indexStyle.absoluteframe} >

                    <View style={indexStyle.topframe}>
                        <FrameOne connection={connection} data={data} />
                        <FrameTwo connection={connection} data={data} />
                        <FrameThree connectionF={connectionF} data={dataForecast} />
                    </View>

                    <BottomFrameCity
                        getcity={getcity}
                        deleteItemFromDatabase={deleteItemFromDatabase}
                        connection={connection}
                        menuActivate={menuActivate}
                        setInsertCity={setInsertCity}
                        reloadViewFunc={reloadViewFunc}
                        setinitcity={setinitcity}
                        setloading={setloading}
                        setMenuActivate={setMenuActivate}
                    />

                </View>

                {

                    insertCity ? (

                        <View
                            style={indexStyle.addnewvity}
                        >

                            <TouchableWithoutFeedback onPress={ () => {
                                setInsertCity(false);
                                setCitytext('');
                                setInputFocused(false);
                            }}>
                                <View style={indexStyle.backgroundColorBlack}></View>
                            </TouchableWithoutFeedback>

                            <View style={indexStyle.frameinput}>
                                <TouchableOpacity  style={indexStyle.closeaddcity} onPress={() => {
                                    setInsertCity(false);
                                    setCitytext('');
                                    setInputFocused(false);
                                }}>
                                    <Text style={indexStyle.closeaddcitytxt}>x</Text>
                                </TouchableOpacity>
                                <Text style={indexStyle.txtaddcity}>Add a City</Text>
                                <Text style={indexStyle.txtdesccity}>Add multiple cities and keep an eye on their weather conditions. This is very useful, for example, before planning a trip.</Text>
                                <TextInput
                                    style={inputFocused ? indexStyle.textcitiesaddFocus : indexStyle.textcitiesadd}

                                    value={citytext}
                                    placeholder={'Please enter a city. (Ex: New York, US)'}
                                    placeholderTextColor={indexStyle.placeholdertextcolor.color}
                                    onChangeText={(text) => setCitytext(text)}
                                    onFocus={() => setInputFocused(true)}
                                    onBlur={() => setInputFocused(false)}

                                    autoFocus={false}
                                />
                                <TouchableOpacity  style={indexStyle.btnsend} onPress={() => {
                                    setloading(true);
                                    CreateItemDataBase(citytext);
                                    setInsertCity(false);
                                    setCitytext('');
                                    reloadViewFunc();
                                    setInputFocused(false);
                                    setinitcity(citytext);
                                }}>
                                    <Text style={indexStyle.sendbtntxt}>+ Add City</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    )

                    : (

                        null

                    )

                }

                {
                    <LoadingScreen setloading={setloading} />
                }

            </SafeAreaView>

        </View>

    );

};
// -------------------------------------------------------------------------------------