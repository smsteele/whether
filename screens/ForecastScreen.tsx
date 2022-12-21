import React, {useEffect, useState} from "react";
import {Period} from "../services/ForecastInfo";
import {GpsLocation} from "../services/Location";
import {WeatherService} from "../services/WeatherService";
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {CoordinatesInput} from "../components/CoordinatesInput";
import {ForecastFlatList} from "../components/ForecastFlatList";
import {colors} from "../styles/colors";

const weatherService = new WeatherService();

// attribution: NASA Worldview, Public domain, via Wikimedia Commons
const screenBackground = require('../assets/images/Storm_Bernardo_2019-11-11.png')

export const ForecastScreen: React.FC<{ initialPeriods?: Array<Period> }> = ({initialPeriods = []}) => {

    const [gpsLocation, setLocation] = useState<GpsLocation>(null);
    const [periods, setPeriods] = useState<Array<Period>>(initialPeriods);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (gpsLocation) {
            weatherService.forecastFor(gpsLocation)
                .then(forecast => setPeriods(forecast.periods))
                .catch(e => {
                    setErrorMsg(`An error occurred fetching forecast for location ${JSON.stringify(gpsLocation)}. Message: ${e}`);
                });
        }
    }, [gpsLocation]);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={screenBackground}
                             resizeMode={'cover'}
                             style={styles.image}
                             accessibilityLabel={'Storm Bernardo 2019-11-11, NASA Worldview, Public domain, via Wikimedia Commons'}>
                <Title/>
                <View style={styles.input}>
                    <CoordinatesInput onSubmit={setLocation}/>
                    {errorMsg ? <ErrorMessage message={errorMsg}/> : <ForecastFlatList periods={periods}/>}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const ErrorMessage: React.FC<{ message: string; }> = ({message}) => (
    <View style={styles.errorMsg}>
        <Text style={{fontSize: 16, margin: 4}}>⚡Oh no!⚡</Text>
        <Text>{message}</Text>
    </View>
);

const Title: React.FC = () => (
    <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Whether or not to brave the weather</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.grey,
        alignItems: 'center',
        fontFamily: 'Helvetica',
    },
    titleTextContainer: {
        fontSize: 24,
        backgroundColor: colors.offWhite,
        borderRadius: 10,
        borderColor: colors.bleu,
        borderWidth: 2,
        padding: 10,
        margin: 4
    },
    titleText: {
        fontSize: 24,
        fontWeight: '400'
    },
    input: {
        borderRadius: 10,
        margin: 4
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    errorMsg: {
        backgroundColor: colors.offWhite,
        borderRadius: 10,
        borderColor: colors.bleu,
        borderWidth: 2,
        fontWeight: "300",
        margin: 20,
        padding: 4
    }
});
