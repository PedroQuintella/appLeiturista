import { View, Text, Image } from "react-native";
import styles from "../../Style/";
import uvass from "../../../assets/icon-vassouras.png";

export default function Title() {
    return (
        <View style={styles.title}>
            <Image source={uvass} style={{width:140, height:140,}} />
            <Text style={styles.titleText}>App Leiturista - Pedro Bonatti</Text>
        </View>
    );
}