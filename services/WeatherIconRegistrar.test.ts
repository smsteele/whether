import {WeatherIconRegistrar} from "./WeatherIconRegistrar";

describe('WeatherIconRegistrar', function () {
    const registrar = new WeatherIconRegistrar();

    it.each([
        {shortForecast: 'Sunny', icon: '☀️'},
        {shortForecast: 'Mostly Sunny', icon: '☀️'},
        {shortForecast: 'Mostly Clear', icon: '☀️'},
        {shortForecast: 'Partly Sunny', icon: '🌤️'},
        {shortForecast: 'Partly Cloudy', icon: '🌥️'},
        {shortForecast: 'Mostly Cloudy', icon: '☁️'},
        {shortForecast: 'Cloudy', icon: '☁️'},
        {shortForecast: 'Snow', icon: '🌨️️'},
        {shortForecast: 'Light Snow', icon: '❄️'},
        {shortForecast: 'Light Snow Likely', icon: '❄️️'},
        {shortForecast: 'Chance Snow Showers', icon: '❄️️'},
        {shortForecast: 'Rain', icon: '🌧️'},
        {shortForecast: 'Chance Rain', icon: '☂️'},
        {shortForecast: 'Light Rain', icon: '☔'},
        {shortForecast: 'Rain Showers', icon: '🌧️'},
    ])('should map $shortForecast to $icon', function ({shortForecast, icon}) {
        expect(registrar.iconFor(shortForecast)).toBe(icon);
    });

    it.each([
        {shortForecast: 'Mostly Cloudy then Chance Snow Showers', icon: '☁️ ❄️️'},
        {shortForecast: 'Mostly Cloudy And Chance Snow Showers', icon: '☁️ ❄️️'},
        {shortForecast: 'Chance Rain And Snow Showers then Rain And Snow Showers', icon: "☂️ 🌨️️ 🌧️ 🌨️️"},
    ])('should handle complex forecast', function ({shortForecast, icon}) {
        expect(registrar.iconFor(shortForecast)).toBe(icon);
    });

    it('should fall back on flaming comet of doom if short forecast is not registered', function () {
        expect(registrar.iconFor('Chance of the end of sunshine, time, and bubble tea')).toBe('☄️');
    });
});
