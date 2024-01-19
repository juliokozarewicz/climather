import {
    View,
    ImageBackground,
} from 'react-native';

// import style sheet
import backgroundStyle from './1_style/backgroundStyle';



// background screen function
// -------------------------------------------------------------------------------------
export function BackgroundScreen(props) {

    function getHour(convert) {
        const timestamp = convert * 1000;
        const data = new Date(timestamp);
        const horas = data.getHours();
      
        return horas > 6 && horas < 18;
    }

    if (props.connection && props.data.weather[0].main.toLowerCase() === 'clouds') {

        return (

            getHour(props.data.dt)

            ?  (

                <ImageBackground
                    source={require('./3_img/clouds.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

            : (

                <ImageBackground
                    source={require('./3_img/cloudsn.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

        );

    } else if (props.connection && props.data.weather[0].main.toLowerCase() === 'clear') {

        return (

            getHour(props.data.dt)

            ?  (

                <ImageBackground
                    source={require('./3_img/clear.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

            : (

                <ImageBackground
                    source={require('./3_img/clearn.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

        );

    } else if (props.connection && props.data.weather[0].main.toLowerCase() === 'drizzle') {

        return (

            getHour(props.data.dt)

            ?  (

                <ImageBackground
                    source={require('./3_img/drizzle.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

            : (

                <ImageBackground
                    source={require('./3_img/drizzlen.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

        );

    } else if (props.connection && props.data.weather[0].main.toLowerCase() === 'rain') {

        return (

            getHour(props.data.dt)

            ?  (

                <ImageBackground
                    source={require('./3_img/rain.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

            : (

                <ImageBackground
                    source={require('./3_img/rainn.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

        );

    } else if (props.connection && props.data.weather[0].main.toLowerCase() === 'snow') {

        return (

            getHour(props.data.dt)

            ?  (

                <ImageBackground
                    source={require('./3_img/snow.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

            : (

                <ImageBackground
                    source={require('./3_img/snown.jpg')}
                    style={backgroundStyle.imgbackground}
                ></ImageBackground>

            )

        );

    } else if (props.connection && props.data.weather[0].main.toLowerCase() === 'thunderstorm') {

        return (

            <ImageBackground
                source={require('./3_img/Thunderstorm.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    } else {

        return (

            <ImageBackground
                source={require('./3_img/other.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    }
    
};
// -------------------------------------------------------------------------------------