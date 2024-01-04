import { StyleSheet } from "react-native";
import { BLUE, GREY } from "../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        marginBottom : 20,
        fontWeight : 'medium',
        fontSize : 14
    },
    label : {
        marginBottom : 8,
        color: BLUE,
    },
    inputContainer : {
        borderWidth : 1,
        borderRadius : 14,
        borderColor : GREY,
        flexDirection : 'row',
        alignItems : 'center'
    },
    input : {
        paddingHorizontal : 16,
        paddingVertical : 21,
        flex : 1
    },
    eye : {
        height : 24,
        width : 24,
        marginHorizontal : 16
    }
})