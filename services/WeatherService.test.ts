import {GpsLocation} from "./Location";
import {WeatherService} from "./WeatherService";
import {NwsWeatherApiClient} from "./ApiClient";
import {ForecastInfo} from "./ForecastInfo";
import {supplyForecastDto, supplyPointInfoDto} from "../utils/TestUtils";


describe('Weather Service', function () {

    it('should return forecast for coordinates', async function () {

        jest.spyOn(NwsWeatherApiClient, 'forecast').mockResolvedValue(supplyForecastDto());
        jest.spyOn(NwsWeatherApiClient, 'pointInfo').mockResolvedValue(supplyPointInfoDto());
        const weatherService = new WeatherService();

        // Mt Massive 39.1872° N, 106.4753° W
        const gpsLocation: GpsLocation = GpsLocation.locationFrom(39.1872, 106.4753);
        const forecast: ForecastInfo = await weatherService.forecastFor(gpsLocation);

        expect(forecast.periods).toHaveLength(2);
        const period = forecast.periods[0];
        expect(period).toHaveProperty('temperature');
        expect(period).toHaveProperty('shortForecast');
        expect(period).toHaveProperty('detailedForecast');
    });
});

