import {render, screen} from "@testing-library/react-native";
import {Forecast} from "./Forecast";
import {faker} from '@faker-js/faker';
import {TemperatureUnit} from "../services/ForecastInfo";

describe('Forecast', function () {
    it('should display temperature', function () {
        renderForecast({temperature: 10, temperatureUnit: 'C'});
        expect(screen.getByText('10° C')).toBeVisible();
    });
    it('should display time window of forecast', function () {
        renderForecast({
            startTime: "2022-12-15T15:00:00-06:00",
            endTime: "2022-12-15T18:00:00-06:00",
        })
        expect(screen.getByText(/Forecast from/)).toHaveTextContent('Forecast from 12/15/2022 3:00 PM to 12/15/2022 6:00 PM');
        let myScreen = screen;
        console.log()
    });
    it('should display short forecast', function () {
        renderForecast({shortForecast: 'Mostly Cloudy'});
        expect(screen.getByText('☁️')).toBeVisible();
    });
    it('should display detailed forecast', function () {
        renderForecast({
            detailedForecast: 'Mostly cloudy, with a high near 33. Northwest wind 20 to 25 mph, with gusts as high as 35 mph.'
        });
        expect(screen.getByText('Mostly cloudy, with a high near 33. Northwest wind 20 to 25 mph, with gusts as high as 35 mph.'))
            .toBeVisible();
    });
});
type ForecastOptions = {
    temperature?: number
    temperatureUnit?: TemperatureUnit
    startTime?: string
    endTime?: string
    shortForecast?: string,
    detailedForecast?: string
}

function renderForecast(options: ForecastOptions = {}) {
    render(
        <Forecast temperature={options.temperature || Number.parseFloat(faker.random.numeric())}
                  temperatureUnit={options.temperatureUnit || 'F'}
                  startTime={options.startTime || faker.animal.bear()}
                  endTime={options.endTime || faker.animal.bear()}
                  shortForecast={options.shortForecast || faker.music.songName()}
                  detailedForecast={options.detailedForecast || faker.lorem.text()}
        />
    );
}
