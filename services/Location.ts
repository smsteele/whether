export class GpsLocation {
    private readonly _latitude: Coordinate
    private readonly _longitude: Coordinate

    constructor(latitude: Coordinate, longitude: Coordinate) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    static locationFrom(latitudinalDegrees: number, longitudinalDegrees: number): GpsLocation {
        const latitude = new Coordinate(latitudinalDegrees, CoordinateType.LATITUDE);
        const longitude = new Coordinate(longitudinalDegrees, CoordinateType.LONGITUDE);
        return new GpsLocation(latitude, longitude);
    }

    get latitude(): Coordinate {
        return this._latitude;
    }

    get longitude(): Coordinate {
        return this._longitude;
    }
}

export class Coordinate {
    private readonly _degree: number
    private readonly _type: CoordinateType

    constructor(degree: number, type: CoordinateType) {
        this._degree = degree;
        this._type = type;
    }

    get degree(): number {
        return this._degree;
    }

    get type(): CoordinateType {
        return this._type;
    }
}

export enum CoordinateType {
    LATITUDE = "Latitude",
    LONGITUDE = "Longitude"
}
