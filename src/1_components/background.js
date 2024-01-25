import {
    View,
    ImageBackground,
} from 'react-native';

// import style sheet
import backgroundStyle from './1_style/backgroundStyle';



// background screen function
// -------------------------------------------------------------------------------------
export function BackgroundScreen(props) {


    try {

        function getHour(hour, timezone) {

            const dtFormat = new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric',
                hour12: false,
                timeZone: 'UTC'
            });
            
            const hours = dtFormat.format(new Date(hour * 1e3 + timezone * 1e3));

            return hours > 6 && hours < 19;
        };

        if (props.connection && props.data.weather[0].main.toLowerCase() === 'clouds') {

            return (

                getHour(props.data.dt, props.data.timezone)

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

                getHour(props.data.dt, props.data.timezone)

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

                getHour(props.data.dt, props.data.timezone)

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

                getHour(props.data.dt, props.data.timezone)

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

                getHour(props.data.dt, props.data.timezone)

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

    } catch {

        return (

            <ImageBackground
                source={require('./3_img/other.jpg')}
                style={backgroundStyle.imgbackground}
            ></ImageBackground>

        );

    }
    
    
};
// -------------------------------------------------------------------------------------