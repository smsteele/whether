import {StyleSheet, Text, View} from "react-native";
import ImageContainer from "../components/ImageContainer";
import {colors} from "../styles/colors";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <AppTitle/>
            <ImageContainer/>
        </View>
    );
}

const AppTitle = () => (
    <View style={styles.title} >
        <Text style={styles.titleTex}>Whether</Text>
        <Text style={styles.subtitleText}>Search forecasts by latitude and longitude</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey,
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        backgroundColor: colors.offWhite,
        borderColor: colors.bleu,
        borderWidth: 2,
        margin: 25,
        paddingHorizontal: 90,
        paddingVertical: 15,
        borderRadius: 10
    },
    titleTex: {
        fontWeight: "400",
        fontSize: 24
    },
    subtitleText: {
        fontWeight: "200",
        fontSize: 12
    }
});
