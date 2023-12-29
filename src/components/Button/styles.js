import { StyleSheet } from "react-native";
import { BLUE, WHITE } from "../../utils/colors";


export const styles = StyleSheet.create({
    container : {
        backgroundColor : BLUE,
        paddingVertical : 20,
        paddingHorizontal : 8,
        borderRadius : 8,
        width : '100%'
    },
    title : {
        color : WHITE,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 16
    }
}) 