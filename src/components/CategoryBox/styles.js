import { StyleSheet } from "react-native";
import { GREY, LIGHT_GREY } from "../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        marginHorizontal : 8,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical : 16
    },
    title : {
        color : GREY
    },
    imageContainer : {
        backgroundColor: LIGHT_GREY,
        padding : 8,
        borderRadius : 8,
        marginBottom : 8
    },
    image : {
        width : 32,
        height : 32
    }
})