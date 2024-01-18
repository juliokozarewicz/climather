import { API_KEY } from '@env';


export async function getDataWeather () {

    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Curitiba&units=metric&lang=pt_br&units=metric&appid=${API_KEY}`);
    const result = await request.json();
    return result;
};