import { View, Text } from "react-native";
import { styles } from "./style";
import CardView from "../../components/CardView";

export default function StoreScreen() {
    
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox}>
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.topRight]}></View>
                <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
                <View style={[styles.triangleCorner, styles.bottomRight]}></View>
                <CardView />
            </View>
        </View>
    )
}