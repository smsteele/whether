import {Image, StyleSheet, View} from "react-native";
import {colors} from "../styles/colors";

const LandingPageImage = require('../assets/images/landing-page.jpeg');

const ImageContainer = () => {
    return (
        <View style={styles.container} collapsable={false}>
            <Image source={LandingPageImage} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 18,
        width: 320,
        height: 440,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});

export default ImageContainer;
