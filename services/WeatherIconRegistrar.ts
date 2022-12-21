const iconRegistry = {
    'Sunny': '☀️',
    'Mostly Sunny': '☀️',
    'Mostly Clear': '☀️',
    'Partly Sunny': '🌤️',
    'Partly Cloudy': '🌥️',
    'Mostly Cloudy': '☁️',
    'Cloudy': '☁️',
    'Snow': '🌨️️',
    'Snow Showers': '🌨️️',
    'Light Snow': '❄️',
    'Light Snow Likely': '❄️️',
    'Chance Snow Showers': '❄️️',
    'Snow Showers Likely': '❄️️',
    'Rain': '🌧️',
    'Chance Rain': '☂️',
    'Light Rain': '☔',
    'Rain Showers': '🌧️',
}

const fallbackIcon = '☄️';

export class WeatherIconRegistrar {
    iconFor(shortForecast: string): string {
        let icon = iconRegistry[shortForecast];
        if (icon) {
            return icon;
        } else if (shortForecast.includes('then')) {
            return this.buildComplexIcon(shortForecast, ' then ');
        } else if (shortForecast.includes('And')) {
            return this.buildComplexIcon(shortForecast, ' And ');
        }
        return fallbackIcon;
    }

    private buildComplexIcon(shortForecast: string, separator: string): string {
        const [forecast1, forecast2] = shortForecast.split(separator);
        return `${this.iconFor(forecast1)} ${this.iconFor(forecast2)}`
    }
}
