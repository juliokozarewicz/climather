import { API_KEY } from '@env';


export async function getDataWeather () {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Curitiba&units=metric&units=metric&appid=${API_KEY}`);
    const result = await request.json();
    return result;
};

export async function getDataForecast() {
        const requestF = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Curitiba&&units=metric&appid=${API_KEY}`);
        const resultF = await requestF.json();
        return resultF;

};