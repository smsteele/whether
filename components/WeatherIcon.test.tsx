import {render, screen} from "@testing-library/react-native";
import {WeatherIcon} from "./WeatherIcon";

describe('WeatherIcon', function () {
    it('should display weather icon', function () {
        render(<WeatherIcon icon={'🌨️'} label={'Snow fo sho'}/>);
        expect(screen.getByText('🌨️')).toBeVisible();
        expect(screen.getByLabelText('Snow fo sho')).toBeVisible();
    });
});
