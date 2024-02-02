export function loadForecastData(dateunix, timezone) {

    const dateconv = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    });

    const datetimezone = dateconv.format(new Date(dateunix * 1e3 + timezone * 1e3));

    const day = datetimezone.substring(0, 2);
    //const month = datetimezone.substring(3, 5);
    //const year = datetimezone.substring(6, 8);
    const hours = datetimezone.substring(10, 12);
    //const minutes = datetimezone.substring(13, 15);

    return ({"daymonth": day, "hours": hours});

};