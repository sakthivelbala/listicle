import { StyleSheet, Dimensions } from "react-native";
import { BLACK, TEXT_GREY } from "../../utils/colors";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container : {
        margin : 8
    },
    title : {
        color : TEXT_GREY,
        paddingVertical : 8
    },
    price : {
        color : BLACK,
        paddingBottom : 8
    },
    image : {
        width : (width-64)/2,
        height : 220,
        borderRadius : 8,
    }
})