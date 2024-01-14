import { StyleSheet } from "react-native";
import { BLUE, GREY, WHITE } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        padding : 24,
    },
    sectionTitle : {
        color : BLUE,
        fontWeight : '500',
        fontSize : 14
    },
    imagesContainer : {
        flexDirection : 'row',
        marginVertical : 10
    },
    uploadContainer : {
        borderWidth : 1,
        borderRadius : 8,
        borderStyle : 'dashed',
        borderColor : GREY,
        height : 90,
        width : 90,
        alignItems : 'center',
        justifyContent : 'center'
    },
    uploadCircle : {
        height : 32,
        width : 32,
        borderRadius : 100,
        backgroundColor : GREY,
        justifyContent : 'center'
    },
    plus : {
        color : WHITE,
        fontWeight : '500',
        fontSize : 24,
        alignSelf : 'center'
    },
    image : {
        height : 90,
        width : 90,
        marginHorizontal : 10,
        borderRadius : 8
    },
    imageDelete : {
        position : 'absolute',
        height : 24,
        width : 24,
        right : -1,
        top : -6
    },
    textArea : {
        minHeight : 100,
        textAlignVertical : 'top'
    },
    submit : {
        paddingBottom : 16
    }
})