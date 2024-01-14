import { StyleSheet } from "react-native";
import { BLUE, GREY, WHITE } from "../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        padding : 12,
        marginVertical : 8,
        borderRadius : 4,
        backgroundColor : WHITE,
        // google react native shadow generator
        // ios shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        // android shadow
        elevation: 6,
    },
    title : {
        color : GREY,
        fontSize : 12
    },
    input : {
        color : BLUE,
        fontSize : 14,
        fontWeight : '500',
        borderBottomWidth : 2,
        borderBottomColor : BLUE
    },
    value : {
        marginTop : 6,
        fontSize : 14,
        color : BLUE,
        fontWeight : '500'
    }
})