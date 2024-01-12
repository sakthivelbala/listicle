import { StyleSheet, Dimensions } from "react-native";
import {  LIGHT_GREY, TEXT_GREY, WHITE } from "../../../utils/colors";

const { height } = Dimensions.get('window')

export default styles = StyleSheet.create({
    safe : {
        flex : 1,
    },
    constainer : {

    },
    image : {
        width : '100%',
        height : height * 0.45
    },
    content : {
        backgroundColor : WHITE,
        borderTopLeftRadius : 16,
        borderTopRightRadius : 16,
        paddingHorizontal : 24,
        marginTop : -40
    },
    title : {
        marginTop : 40,
        fontSize : 24,
        fontWeight : '500'
    },
    price : {
        fontSize : 30,
        fontWeight : 'bold',
        marginVertical : 8
    },
    description : {
        color : TEXT_GREY,
        fontWeight : '300'
    },
    footer : {
        padding : 24,
        flexDirection : 'row',
        alignItems : 'center'
    },
    bookmarkContainer : {
        backgroundColor : LIGHT_GREY,
        padding : 18,
        borderRadius : 8,
        marginRight : 16
    },
    bookmarkIcon : {
        width : 24,
        height : 24
    },
    backContainer : {
        backgroundColor : WHITE,
        padding : 10,
        margin : 24,
        borderRadius : 8,
        marginRight : 16,
        position : 'absolute'
    },
    backIcon : {
        width : 20,
        height : 20
    }
})