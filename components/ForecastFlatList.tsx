import React from "react";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {Period} from "../services/ForecastInfo";
import {colors} from "../styles/colors";
import {Forecast} from "./Forecast";

type ForecastFlatListProps = {
    periods: Array<Period>
}

export const ForecastFlatList: React.FC<ForecastFlatListProps> = ({periods}) => (
    <SafeAreaView style={styles.container}>
        <FlatList data={periods}
                  renderItem={(item) => {
                      const period = item.item;
                      return (
                          <View key={period.number}>
                              <Forecast startTime={period.startTime}
                                        endTime={period.endTime}
                                        temperature={period.temperature}
                                        temperatureUnit={period.temperatureUnit}
                                        shortForecast={period.shortForecast}
                                        detailedForecast={period.detailedForecast}/>
                          </View>);
                  }}/>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: colors.aqua,
        color: colors.darkBlue,
        borderRadius: 10,
        borderColor: colors.darkBlue,
        borderWidth: 2,
        padding: 2,
        margin: 2
    },
})
