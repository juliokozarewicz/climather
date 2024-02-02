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
    Image,
} from 'react-native';

// import style sheet
import indexStyle from './1_style/indexStyle';

// import func api request
import { getDataWeather, getDataForecast} from './0_functions/apirequest';

// database
import {CreateItemDataBase, ReadDataBase, deleteItemFromDatabase} from './0_functions/CRUD'

// unix dt convert
import {loadForecastData} from './0_functions/unixdatetimeconvert'


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
        const [initcity, setinitcity] = useState();

        // menu
        const [menuActivate, setMenuActivate] = useState(false);

        // input city colors
        const [inputFocused, setInputFocused] = useState(false);

        // loadingpage
        const [loading, setloading] = useState(false);
        const [loadingINIT, setloadingINIT] = useState(true);

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

        const fetchDataFromApi = async (city) => {

            try {

                const result = await getDataWeather(city);
                const CitiesDB = await ReadDataBase();

                if (result && result.cod == '200') {
                    setErrorGetData(false);
                    setData(result);
                    setConnection(true);

                } else if (CitiesDB.length > 0 && CitiesDB[0].city) {
                    const result = await getDataWeather(CitiesDB[0].city);
                    setData(result);
                    
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
                const CitiesDBF = await ReadDataBase();

                if (dataForecast && dataForecast.cod == '200') {

                    const dataReduced = dataForecast.list.reduce((acc, obj) => {
                        const localTimestamp = (obj.dt * 1000 + dataForecast.city.timezone * 1000);
                        const dateTime = new Date(localTimestamp);
                        
                        const options = { weekday: 'long' };
                        const locale = navigator.language;
                        const dayOfWeek = dateTime.toLocaleDateString(locale, options);
                        const dateKey = `${dayOfWeek}`;

                        if (!acc[dateKey]) {
                            acc[dateKey] = [];
                        }
                        acc[dateKey].push(obj);

                        return acc;
                    }, {});

                    setDataForecast({'dataReduced': dataReduced, 'timezone': dataForecast.city.timezone});
                    setConnectionF(true);

                } else if (CitiesDBF.length > 0 && CitiesDBF[0].city) {

                    const dataForecast = await getDataForecast(CitiesDBF[0].city);
                    setDataForecast(dataForecast);

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

        const fetchDataBase = async () => {

            try {
                const result = await ReadDataBase();

                const dataDictArray = [];

                for (const item of result) {

                    const citiData = await getDataWeather(item.city);

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

                const initCityValue = initcity ? initcity : result.length > 0 && result[0].city ? result[0].city : 'New York, US';

                setGetcity(dataDictArray);
                fetchDataFromApi(initCityValue);
                fetchForecast(initCityValue);

            } catch (error) {

                console.error(error);

            }
        };

        fetchDataBase();
    }, [reloadDataAPI]);
    // -------------------------------------------------------------------------------------

    // loadscreen
    // -------------------------------------------------------------------------------------
    function LoadingScreen (props) {

        useEffect(() => {
            const timer = setTimeout(() => {
                setloading(false);
            }, 3000);

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

    // loadscreen
    // -------------------------------------------------------------------------------------
    function LoadingScreenINIT () {

        useEffect(() => {
            const timer = setTimeout(() => {
                setloadingINIT(false);
            }, 2500);

            return () => clearTimeout(timer);
          }, []);

        return(

            loadingINIT

            ?
                <View style={indexStyle.loadingpageinit}>
                    <View style={indexStyle.loadbackinit}></View>

                    <View style={indexStyle.centercontent}>
                        <Image source={require('./3_img/logo.png')} style={indexStyle.initloadlogo} />
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
                        <FrameThree connectionF={connectionF} dataForecast={dataForecast} />
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

                <LoadingScreen />

                <LoadingScreenINIT />

            </SafeAreaView>

        </View>

    );

};
// -------------------------------------------------------------------------------------