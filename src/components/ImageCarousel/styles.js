import { StyleSheet, Dimensions } from "react-native";
import { BLACK, WHITE } from "../../utils/colors";

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    list : {
        
    },
    image : {
        width : width,
        height : height * 0.45 
    },
    pagination : {
        flexDirection : 'row',
        alignItems : 'center',
        position : 'absolute',
        bottom : 60,
        alignSelf : 'center'
    },
    paginationLine : {
        height : 5,
        width : 20,
        borderRadius : 10,
        backgroundColor : WHITE,
        margin : 5
    },
    activeLine : {
        backgroundColor : BLACK,
        width : 30
    }
}) 