import { StyleSheet } from "react-native";
import { BLACK, BLUE, GREY, WHITE } from "../../utils/colors";

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
    arrow : {
        height : 24,
        width : 24,
        marginHorizontal : 16,
        transform : [{rotate : '90deg'}]
    },
    modalWrapper : {
        backgroundColor : 'rgba(0,0,0,0.5)',
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1
    },
    modalContent : {
        backgroundColor : WHITE,
        borderRadius : 8,
        padding : 8,
        width : '80%',
        alignItems : 'center',
        justifyContent : 'center',
    },
    header : {
        marginBottom : 16,
        fontSize : 16,
        color : BLACK
    },
    options : {
        paddingVertical : 4,
        color : BLACK
    },
    selectedOption : {
        color : BLUE,
        fontWeight : 'bold'
    }
})