import { StyleSheet } from "react-native";
import { BLUE, ORANGE } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container : {
        padding : 24,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100%'
    },
    image : {
        width : '100%',
        height : 200
    },
    titleContainer : {
        marginVertical : 54
    },
    title : {
        fontSize : 40,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    innerTitle : {
        color : ORANGE,
        textDecorationLine : 'underline'
    },
    footerText : {
        textAlign : 'center',
        color : BLUE,
        fontWeight : 'bold',
        fontSize : 16,
        marginTop : 30
    }
})