import {
    View,
    ImageBackground,
} from 'react-native';

// import style sheet
import backgroundStyle from './1_style/backgroundStyle';



// background screen function
// -------------------------------------------------------------------------------------
export function BackgroundScreen(props) {

    if (props.connection && props.backgroundstyle.weather[0].main.toLowerCase() === 'clouds') {

        return (

            <ImageBackground
                source={require('./3_img/clouds.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    } else if (props.connection && props.backgroundstyle.weather[0].main.toLowerCase() === 'clear') {

        return (

            <ImageBackground
                source={require('./3_img/clear.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    } else if (props.connection && props.backgroundstyle.weather[0].main.toLowerCase() === 'drizzle') {

        return (

            <ImageBackground
                source={require('./3_img/drizzle.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    } else if (props.connection && props.backgroundstyle.weather[0].main.toLowerCase() === 'rain') {

        return (

            <ImageBackground
                source={require('./3_img/rain.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    } else if (props.connection && props.backgroundstyle.weather[0].main.toLowerCase() === 'snow') {

        return (

            <ImageBackground
                source={require('./3_img/snow.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    } else if (props.connection && props.backgroundstyle.weather[0].main.toLowerCase() === 'Thunderstorm') {

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