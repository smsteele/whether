import {render, screen} from "@testing-library/react-native";
import {ForecastScreen} from "./ForecastScreen";
import {Period} from "../services/ForecastInfo";

describe('Forecast Screen', function () {
    it('should contain coordinates input', function () {
        render(<ForecastScreen/>)
        expect(screen.getByLabelText('N Latitude')).toBeVisible();
        expect(screen.getByLabelText('W Longitude')).toBeVisible();
        expect(screen.getByText('Get Forecast')).toBeVisible();
    });

    it('should generate forecasts for each forecast period', function () {
        const periods: Array<Period> = [{
            "number": 1,
            "name": "Today",
            "startTime": "2022-12-20T11:00:00-06:00",
            "endTime": "2022-12-20T18:00:00-06:00",
            "temperature": 20,
            "temperatureUnit": "F",
            "shortForecast": "Chance Snow Showers then Partly Sunny",
            "detailedForecast": "A chance of snow showers before noon. Partly sunny, with a high near 20. Wind chill values as low as 0. Northeast wind 5 to 10 mph."
        },
            {
                "number": 2,
                "name": "Tonight",
                "startTime": "2022-12-20T18:00:00-06:00",
                "endTime": "2022-12-21T06:00:00-06:00",
                "temperature": 12,
                "temperatureUnit": "F",
                "shortForecast": "Mostly Cloudy",
                "detailedForecast": "Mostly cloudy, with a low around 12. East wind 5 to 10 mph."
            }];
        render(<ForecastScreen initialPeriods={periods}/>)

        expect(screen.getByText('❄️️ 🌤️')).toBeVisible();
        expect(screen.getByText('20° F')).toBeVisible();
        expect(screen.getByText(
            'A chance of snow showers before noon. ' +
            'Partly sunny, with a high near 20. ' +
            'Wind chill values as low as 0. ' +
            'Northeast wind 5 to 10 mph.')
        ).toBeVisible();


        expect(screen.getByText('☁️')).toBeVisible();
        expect(screen.getByText('12° F')).toBeVisible();
        expect(screen.getByText('Mostly cloudy, with a low around 12. East wind 5 to 10 mph.')).toBeVisible();
    });
});
