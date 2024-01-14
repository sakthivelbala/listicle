import { StyleSheet } from "react-native";
import { BLUE, GREY, WHITE } from "../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding : 18,
        marginVertical : 13,
        marginHorizontal : 8,
        alignItems : 'center',
        borderRadius : 4,
        backgroundColor : WHITE,
        // google react native shadow generator
        // ios shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        // android shadow
        elevation: 6,
    },
    titleContainer : {
        flex : 1,
        justifyContent : 'center'
    },
    title : {
        color : BLUE,
        fontSize : 16,
        fontWeight : 'bold',
    },
    subTitle : {
        marginTop : 6,
        fontSize : 12,
        color : GREY
    },
    imageContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        marginRight : 8
    },
    image : {
        height : 24,
        width : 24
    }
})