import { API_KEY } from '@env';
import { NativeModules, Platform } from 'react-native';

const GET_API_KEY = API_KEY;

const lang = Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

export async function getDataWeather (city) {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&units=metric&appid=${GET_API_KEY}`);
    const result = await request.json();
    return result;
};

export async function getDataForecast(city) {
        const requestF = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&cnt=&units=metric&appid=${GET_API_KEY}`);
        const resultF = await requestF.json();
        return resultF;
};