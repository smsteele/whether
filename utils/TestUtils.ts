export const supplyForecastDto = () => ({
    properties: {
        periods: supplyPeriods()
    }
});


export const supplyPointInfoDto = () => ({
    properties: {
        forecast: 'https://api.weather.gov/gridpoints/TOP/31,80/forecast'
    }
});

const periods = [
    {
        "number": 1,
        "name": "Today",
        "startTime": "2022-12-15T15:00:00-06:00",
        "endTime": "2022-12-15T18:00:00-06:00",
        "isDaytime": true,
        "temperature": 33,
        "temperatureUnit": 'F',
        "shortForecast": "Mostly Cloudy",
        "detailedForecast": "Mostly cloudy, with a high near 33. Northwest wind 20 to 25 mph, with gusts as high as 35 mph."
    },
    {
        "number": 2,
        "name": "Tonight",
        "startTime": "2022-12-15T18:00:00-06:00",
        "endTime": "2022-12-16T06:00:00-06:00",
        "isDaytime": false,
        "temperature": 18,
        "temperatureUnit": 'F',
        "shortForecast": "Mostly Cloudy",
        "detailedForecast": "Mostly cloudy, with a low around 18. Northwest wind around 20 mph, with gusts as high as 35 mph."
    }
];
export const supplyPeriods = () => [...periods];
