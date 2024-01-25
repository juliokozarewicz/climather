import { API_KEY } from '@env';

const GET_API_KEY = API_KEY;

export async function getDataWeather (city) {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&units=metric&appid=${GET_API_KEY}`);
    const result = await request.json();
    return result;
};

export async function getDataForecast(city) {
        const requestF = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&&units=metric&appid=${GET_API_KEY}`);
        const resultF = await requestF.json();
        return resultF;
};