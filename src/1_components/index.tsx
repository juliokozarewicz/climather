import React, {
    useEffect,
    useState,
} from 'react';

import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
} from 'react-native';

// import style sheet
import indexStyle from './1_style/indexStyle';


// import func api request
import { getDataWeather } from './0_functions/apirequest';

// External components (INIT)
// ===============================

import {SplashError} from './splasherror';

// ===============================
// External components (END)


// index screen function
// -------------------------------------------------------------------------------------
export function IndexScreen() {


    // states
    // -------------------------------------------------------------------------------------

        // request api data
        const [data, setData] = useState();
        const [errorGetData, setErrorGetData] = useState(false);
        const [errorGetDataMSG, setErrorGetDataMSG] = useState('');
    // -------------------------------------------------------------------------------------
    
    // api request
    // -------------------------------------------------------------------------------------
    useEffect(() => {

        const fetchDataFromApi = async () => {

            const result = await getDataWeather();

            if (result && result.cod === 200) {
            
                setData(result);
            
            } else {

                setErrorGetData(true);
                setErrorGetDataMSG('Falha na comunicação. Falha na comunicação.Falha na comunicação.Falha na comunicação. Falha na comunicação.');

            };

        };

        fetchDataFromApi();

    }, []);
    // -------------------------------------------------------------------------------------

    return (

        <View style={indexStyle.allcontent}>

            <SplashError errorGetData={errorGetData} errorGetDataMSG={errorGetDataMSG} />

            <SafeAreaView>

            <StatusBar barStyle="light-content" backgroundColor={indexStyle.statusbar.backgroundColor} />

                <Text style={indexStyle.textexample}>{JSON.stringify(data)}</Text>

            </SafeAreaView>

        </View>
        
    );
    
};
// -------------------------------------------------------------------------------------