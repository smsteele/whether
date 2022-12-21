import {
    Button,
    NativeSyntheticEvent,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TextInputChangeEventData,
    View
} from "react-native";
import {colors} from "../styles/colors";
import {useState} from "react";
import {GpsLocation} from "../services/Location";

type CoordinatesInputProps = {
    onSubmit: (gpsLocation: GpsLocation) => void
}

export const CoordinatesInput: React.FC<CoordinatesInputProps> =
    ({
         onSubmit,
     }) => {
        const [latitude, setLatitude] = useState('');
        const [longitude, setLongitude] = useState('');
        const keyboardType = Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'default';

        const setGpsLocation = () => {
            const longitudinalDegrees = Number.parseFloat(longitude);
            const gpsLocation = GpsLocation.locationFrom(
                Number.parseFloat(latitude),
                longitudinalDegrees < 0 ? longitudinalDegrees : longitudinalDegrees * -1
            );
            onSubmit(gpsLocation);
        };

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <CoordinateInput degrees={latitude} degreeSetter={setLatitude} label={'N Latitude'}/>
                    <CoordinateInput degrees={longitude} degreeSetter={setLongitude} label={'W Longitude'}/>
                    <View style={styles.button}>
                        <Button title={"Get Forecast"}
                                onPress={setGpsLocation}/>
                    </View>
                </View>
            </View>
        )
    };

const CoordinateInput = ({degrees, degreeSetter, label}) => {
    const keyboardType = Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'default';
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>W Longitude</Text>
            <TextInput style={styles.input}
                       accessibilityLabel={label}
                       value={degrees ? `${degrees}` : ''}
                       onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => degreeSetter(e.nativeEvent.text)}
                       keyboardType={keyboardType}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.offWhite,
        padding: 4,
        borderRadius: 10,
        borderColor: colors.bleu,
        borderWidth: 2,
        color: colors.darkBlue
    },
    rowContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    inputContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        margin: 2
    },
    label: {
        margin: 2,
    },
    input: {
        backgroundColor: colors.offWhite,
        borderColor: colors.bleu,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 36,
        margin: 2,
    },
    button: {
        display: "flex",
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: '300',
        backgroundColor: colors.offWhite,
        borderColor: colors.bleu,
        borderWidth: 2,
        borderRadius: 5,
        margin: 2,
    },

});
