import {fireEvent, render, screen} from "@testing-library/react-native";
import {CoordinatesInput} from "./CoordinatesInput";
import {GpsLocation} from "../services/Location";

describe('Coordinate Input', function () {
    it('should display latitude and longitude labels', function () {
        render(<CoordinatesInput onSubmit={jest.fn()}/>);
        expect(screen.getByLabelText('N Latitude')).toBeVisible();
        expect(screen.getByLabelText('W Longitude')).toBeVisible();
    });
    it('should accept a coordinate', function () {
        const onSubmit = jest.fn();
        render(<CoordinatesInput onSubmit={onSubmit}/>
        );
        // Mt Massive 39.1872° N, 106.4753° W
        fireEvent.changeText(screen.getByLabelText('N Latitude'), {target: {value: '39.1872'}});
        fireEvent.changeText(screen.getByLabelText('W Longitude'), {target: {value: '106.4753'}});
        fireEvent.press(screen.getByText('Get Forecast'));
        expect(onSubmit).toHaveBeenCalled();
    });
});
