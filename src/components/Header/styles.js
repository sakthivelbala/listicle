import { StyleSheet } from "react-native";
import { BLACK } from "../../utils/colors";

export const styles = StyleSheet.create({
    mainContainer : {
        paddingHorizontal : 24
    },
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginVertical : 8
    },
    title : {
        color: BLACK,
        fontSize : 16,
        fontWeight : 'bold'
    },
    icon : {
        width : 24,
        height : 24
    },
    space : {
        width : 24
    }
})