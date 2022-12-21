import {NwsPointInfoDto} from "./PointInfo";
import {ForecastInfo, ForecastDto} from "./ForecastInfo";

const call: (url: string) => Promise<Object> = async (url: string) => {
    const response = await fetch(url);
    return response.json();
};

export interface WeatherApiClient {
    forecast: (url: string) => Promise<ForecastInfo>
    pointInfo: (url: string) => Promise<ForecastDto>
}

export const NwsWeatherApiClient = {
    forecast: (url: string) => call(url) as Promise<ForecastDto>,
    pointInfo: (url: string) => call(url) as Promise<NwsPointInfoDto>
}
