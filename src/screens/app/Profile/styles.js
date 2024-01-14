import { StyleSheet } from "react-native";
import { BLACK, GREY } from "../../../utils/colors";
     
export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex : 1
    },
    name : {
        color : BLACK,
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 12
    },
    email : {
        fontSize : 14,
        color : GREY,
        marginBottom : 13
    },
    content : {
        flex : 1
    },
    button : {
        flex : 0
    }
})