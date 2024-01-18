import React, {
    useEffect,
    useState,
} from 'react'

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
import {BackgroundScreen} from './background';
import {FrameOne} from './frameone';
import {FrameTwo} from './frametwo';
import {FrameThree} from './framethree';

// ===============================
// External components (END)


// index screen function
// -------------------------------------------------------------------------------------
export function IndexScreen() {


    // states
    // -------------------------------------------------------------------------------------

        // request api data
        const [data, setData] = useState();
        const [connection, setConnection] = useState(false);
        const [errorGetData, setErrorGetData] = useState(false);
        const [errorGetDataMSG, setErrorGetDataMSG] = useState('');
        const [reloadDataAPI, setReloadDataAPI] = useState(0);
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

            if (result && result.cod === 200) {
                
                setErrorGetData(false);
                setData(result);
                setConnection(true);
            
            } else {

                setErrorGetData(true);
                setConnection(false);
                setErrorGetDataMSG('Communication failure.');

            };

        };

        fetchDataFromApi();

    }, [reloadDataAPI]);
    // -------------------------------------------------------------------------------------

    return (

        <View style={indexStyle.allcontent} key={reloadDataAPI}>

            <SplashError errorGetData={errorGetData} errorGetDataMSG={errorGetDataMSG} setErrorGetData={setErrorGetData} reloadViewFunc={reloadViewFunc}/>

            <SafeAreaView style={indexStyle.allscreen}>

                <Text style={indexStyle.txtlogo} >CLIMATHER</Text>

                <StatusBar barStyle="light-content" backgroundColor={indexStyle.statusbar.backgroundColor} />

                <BackgroundScreen connection={connection} backgroundstyle={data}/>

                <View style={indexStyle.absoluteframe}>

                    <View style={indexStyle.topframe}>
                        <FrameOne connection={connection} data={data}/>
                        <FrameTwo connection={connection} />
                        <FrameThree connection={connection} />
                    </View>

                    <View style={indexStyle.bottomframe}>

                    </View>
                
                </View>

            </SafeAreaView>

        </View>

    );

};
// -------------------------------------------------------------------------------------