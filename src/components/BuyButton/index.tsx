import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./style";

export default function BuyButton() {
    
    return (
            <TouchableOpacity activeOpacity={.8} style={styles.button}>
                <AntDesign name="shoppingcart" size={24} color='white' style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
    )
}