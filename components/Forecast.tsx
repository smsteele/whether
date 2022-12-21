import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {colors} from "../styles/colors";
import {TemperatureUnit} from "../services/ForecastInfo";
import {parseISO} from "date-fns";
import {WeatherIconRegistrar} from "../services/WeatherIconRegistrar";
import {WeatherIcon} from "./WeatherIcon";

const weatherIconRegistrar = new WeatherIconRegistrar();

type ForecastProps = {
    startTime: string
    endTime: string
    temperature: number
    temperatureUnit: 'F' | 'C'
    shortForecast: string
    detailedForecast: string
}

export const Forecast: React.FC<ForecastProps> =
    ({
         startTime,
         endTime,
         temperature,
         temperatureUnit,
         shortForecast,
         detailedForecast
     }) => {
        return (
            <View style={styles.container}>
                <TimeWindow startTime={startTime}
                            endTime={endTime}/>
                <ForecastSummary shortForecast={shortForecast}
                                 temperature={temperature}
                                 temperatureUnit={temperatureUnit}/>
                {/*<Text>{shortForecast}</Text>*/}
                <Text>{detailedForecast}</Text>
            </View>
        );
    }

type ForecastSummaryProps = {
    shortForecast: string,
    temperature: number,
    temperatureUnit: TemperatureUnit
}

const ForecastSummary: React.FC<ForecastSummaryProps> =
    ({
         shortForecast,
         temperature,
         temperatureUnit
     }) => {
        const weatherIcon = weatherIconRegistrar.iconFor(shortForecast);
        return (
            <View style={styles.forecastSummary}>
                <WeatherIcon icon={weatherIcon} label={weatherIcon}/>
                <Temperature degrees={temperature} unit={temperatureUnit}/>
            </View>
        );
    }

const TimeWindow: React.FC<{ startTime: string, endTime: string }> =
    ({startTime, endTime}) => {
        return (
            <Text style={styles.timeWindow}>
                <Text>Forecast </Text>
                {startTime && <TimeSegment direction={`from`} isoDateTimeString={startTime}/>}
                {endTime && <TimeSegment direction={`to`} isoDateTimeString={endTime}/>}
            </Text>
        );
    }

const TimeSegment: React.FC<{ isoDateTimeString: string, direction: string }> = ({isoDateTimeString, direction}) => {
    const dateTime: Date = parseISO(isoDateTimeString);
    // date-fn gives months and hours as zero-based values. Adjust for off by one.
    const dateString = `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()} `;
    const hours = (dateTime.getHours() + 1) % 12 || 12;
    const timeString = `${hours}:00 ${dateTime.getHours() < 13 ? 'AM' : 'PM'} `;
    return (
        <Text>
            <Text>{`${direction} `}</Text>
            <Text style={styles.date}>{dateString}</Text>
            <Text style={styles.time}>{timeString}</Text>
        </Text>
    );
}

const Temperature: React.FC<{ degrees: number, unit: TemperatureUnit }> = ({degrees, unit}) => (
    <View>
        <Text style={styles.temperature}>{`${degrees}° ${unit}`}</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.offWhite,
        borderColor: colors.green,
        borderRadius: 6,
        borderWidth: 1.5,
        marginTop: 4,
        marginHorizontal: 4,
        padding: 4
    },
    timeWindow: {
        fontSize: 12,
        fontWeight: '300'
    },
    date: {
        fontSize: 14,
        fontWeight: '400'
    },
    time: {
        fontSize: 12,
        fontWeight: '300'
    },
    forecastSummary: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 4
    },
    temperature: {
        fontSize: 24,
        fontWeight: '500',
        margin: 3
    }
})
