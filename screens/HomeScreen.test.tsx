import * as React from 'react'
import {render, screen} from '@testing-library/react-native'
import '@testing-library/jest-dom'
import {HomeScreen} from "./HomeScreen";

describe('Home Screen', function () {
    it('should display app title', async function () {
        render(<HomeScreen/>);
        expect(await screen.findByText("Whether")).toBeTruthy();
    });

});
