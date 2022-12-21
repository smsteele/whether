import {GpsLocation} from "./Location";
import {PointInfo} from "./PointInfo";
import {NwsWeatherApiClient} from "./ApiClient";
import {ForecastInfo} from "./ForecastInfo";

export class WeatherService {

    async forecastFor(location: GpsLocation): Promise<ForecastInfo> {

        const pointsInfoUrl = WeatherService.urlForPoint(location);
        const pointInfo: PointInfo = await NwsWeatherApiClient
            .pointInfo(pointsInfoUrl)
            .then(dto => {
                if (!dto?.properties) {
                    throw new Error("dto does not have properties after searching for point info " + JSON.stringify(dto))
                }
                return PointInfo.from(dto);
            });
        if (!pointInfo.forecastUrl) {
            throw new Error("forecast url is undefined after searching for point info")
        }
        return await NwsWeatherApiClient
            .forecast(pointInfo.forecastUrl)
            .then(dto => {
                if (!dto?.properties) {
                    throw new Error("dto does not have properties after searching for forecast info " + JSON.stringify(dto))
                }
                return ForecastInfo.from(dto);
            });
    }

    private static urlForPoint(location: GpsLocation): string {
        return `https://api.weather.gov/points/${location.latitude.degree},${location.longitude.degree}`
    }
}
