import { StyleSheet } from "react-native";
import { BLUE, WHITE } from "../../utils/colors";


export const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 54
    },
    image : {
        width : 18,
        height : 18
    },
    title : {
        fontWeight : '500',
        fontSize : 26,
        color : BLUE,
        paddingHorizontal : 16
    }
}) 