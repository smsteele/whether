export class PointInfo {
    private readonly _forecastUrl: string

    constructor(forecastUrl: string) {
        this._forecastUrl = forecastUrl;
    }

    static from(pointInfoDto: NwsPointInfoDto): PointInfo {
        return new PointInfo(pointInfoDto.properties.forecast);
    }

    get forecastUrl(): string {
        return this._forecastUrl;
    }
}

export type NwsPointInfoDto = {
    properties: {
        forecast: string
    }
}




