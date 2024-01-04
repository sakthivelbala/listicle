import { StyleSheet } from "react-native";
import { GREY } from "../../utils/colors";


export const styles = StyleSheet.create({
    container : {
        width : 22,
        height : 22,
        borderColor : GREY,
        borderWidth : 1,
        borderRadius : 4
    },
    innerContainer : {
        backgroundColor : GREY,
        width : '100%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    icon : {
        width : 12,
        height : 9,
    }
}) 