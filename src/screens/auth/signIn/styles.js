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
    button : {
        marginVertical : 20
    },
    footerText : {
        color: BLUE,
        marginHorizontal : 10,
        textAlign : 'center'
    },
    footerTextBold : {
        fontWeight : 'bold'
    },
})