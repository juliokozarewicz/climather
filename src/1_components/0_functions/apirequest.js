export async function getDataWeather () {
    const request = await fetch('https://api.openweathermap.org/data/2.5/weather?q=***curitiba&units=metric&appid=8e6c68c84999eb085d0414171661b2f4&lang=pt_br&units=metric');
    const result = await request.json();
    return result;
};