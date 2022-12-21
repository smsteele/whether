import {render, screen} from "@testing-library/react-native";
import {supplyPeriods} from "../utils/TestUtils";
import {ForecastFlatList} from "./ForecastFlatList";

describe('Forecast Flat List', function () {
    it('should display list of forecasts', function () {
        render(<ForecastFlatList periods={supplyPeriods()}/>);
        expect(screen.getByText(/.*Mostly cloudy, with a high near 33.*/)).toBeVisible();
        expect(screen.getByText(/.*Mostly cloudy, with a low around 18.*/)).toBeVisible();
    });
});
