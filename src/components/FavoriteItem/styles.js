import { StyleSheet } from "react-native";
import { BLACK, BORDER_COLOR, TEXT_GREY } from "../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        marginHorizontal : 24,
        paddingVertical : 16, 
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : BORDER_COLOR
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
        width : 100,
        height : 100,
        borderRadius : 10,
        marginRight : 20
    },
    content : {
        flex : 1
    },
    close : {
        height : 24,
        width : 24,
        marginRight : 8
    }
})