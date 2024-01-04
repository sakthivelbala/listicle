import { StyleSheet } from "react-native";
import { BLUE } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        padding : 24
    },
    agreeRow : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    agreeText : {
        color: BLUE,
        marginHorizontal : 10
    },
    agreeTextBold : {
        fontWeight : 'bold'
    },
    button : {
        marginVertical : 20
    }
})