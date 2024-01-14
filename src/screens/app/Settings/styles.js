import { StyleSheet } from "react-native";
import { GREY } from "../../../utils/colors";
     
export const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    titleContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    title : {
        flex : 1,
        fontSize : 16,
        fontWeight : '500',
        color : GREY
    },
    imageContainer : {
        padding : 8
    },
    image : {
        height : 24,
        width : 24
    },
    information : {
        marginBottom : 40,
        marginHorizontal : 8
    },
    button : {
        marginTop : 10
    },
    help : {
        fontSize : 16,
        fontWeight : '500',
        color : GREY,
        marginBottom : 16
    },
    item : {
        padding : 8,
        marginVertical : 5
    }
})