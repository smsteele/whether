export class ForecastInfo {
    private readonly _periods: Array<Period>

    get periods(): Array<Period> {
        return this._periods;
    }

    constructor(periods: Array<Period>) {
        this._periods = periods;
    }

    static from(dto: ForecastDto): ForecastInfo {
        const periods = dto.properties.periods.map(p => p as Period);
        return new ForecastInfo(periods);
    }
}

export type ForecastDto = {
    properties: {
        periods: Array<PeriodDto>
    }
}

export type TemperatureUnit = 'F' | 'C';

export type Period = {
    number: number,
    name: string,
    startTime: string,
    endTime: string,
    temperature: number,
    temperatureUnit: TemperatureUnit,
    shortForecast: string,
    detailedForecast: string
}

type PeriodDto = Period;
