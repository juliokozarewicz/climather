import React, {
    useEffect,
    useState,
} from 'react'

import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

// import style sheet
import indexStyle from './1_style/indexStyle';


// import func api request
import { getDataWeather, getDataForecast, testGetDataForecast } from './0_functions/apirequest';

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

        // menu
        const [menuActivate, setMenuActivate] = useState(true);

        // add city
        const [insertCity, setInsertCity] = useState(true);
    // -------------------------------------------------------------------------------------

    // api request
    // -------------------------------------------------------------------------------------
    const reloadViewFunc = () => {
        setReloadDataAPI(prevFlag => prevFlag + 1);
    };
    // -------------------------------------------------------------------------------------
    
    // api request
    // -------------------------------------------------------------------------------------
    useEffect(() => {

        const fetchDataFromApi = async () => {

            const result = await getDataWeather();

            if (result && result.cod == '200') {
                setErrorGetData(false);
                setData(result);
                setConnection(true);
            
            } else {
                setErrorGetData(true);
                setConnection(false);
                setErrorGetDataMSG('Communication failure: Weather.');

            };

        };

        const fetchForecast = async () => {

            const dataForecast = await getDataForecast();

            if (dataForecast && dataForecast.cod == '200') {
                setDataForecast(dataForecast);
                setConnectionF(true);
            } else {
                setConnectionF(false);
                setErrorGetData(true);
                setErrorGetDataMSG('Communication failure: Forecast.');
            };

        };

        async function fetchDataBase() {
            try {
              const result = await ReadDataBase();
              setGetcity(result);
            } catch (error) {
              console.error('Erro ao obter dados:', error);
            }
          };

        fetchDataFromApi().then( () => {
            fetchForecast().then( () => {
                fetchDataBase();
            });
        });

    }, [reloadDataAPI]);
    // -------------------------------------------------------------------------------------

    // img menu
    // -------------------------------------------------------------------------------------
    const imagePath = menuActivate ? require('./3_img/tobottom.png') : require('./3_img/totop.png');
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

                    <View style={menuActivate ? indexStyle.bottomframe : indexStyle.bottomframeClose}>

                        <TouchableOpacity 
                            style={indexStyle.closecities}
                            onPress={() => menuActivate ? setMenuActivate(false) : setMenuActivate(true)}
                        >
                            <Image
                                source={imagePath}
                                style={indexStyle.closeimg}
                            />
                        </TouchableOpacity>

                        <BottomFrameCity
                            getcity={getcity}
                            deleteItemFromDatabase={deleteItemFromDatabase}
                            CreateItemDataBase={CreateItemDataBase}
                            connection={connection}
                            menuActivate={menuActivate}
                            data={data}
                            setInsertCity={setInsertCity}
                            reloadViewFunc={reloadViewFunc}
                        />

                    </View>
                
                </View>

                <View style={insertCity? indexStyle.addnewvity: { display: 'none' }}>
                    <TouchableWithoutFeedback onPress={ () => setInsertCity(false)}>
                        <View style={indexStyle.backgroundColorBlack}></View>
                    </TouchableWithoutFeedback>
                    <View style={indexStyle.frameinput}>
                        <Text style={indexStyle.txtaddcity}>Add a City</Text>
                        <Text style={indexStyle.txtdesccity}>Add multiple cities and keep an eye on their weather conditions. This is very useful, for example, before planning a trip.</Text>
                    </View>
                </View>

            </SafeAreaView>

        </View>

    );

};
// -------------------------------------------------------------------------------------