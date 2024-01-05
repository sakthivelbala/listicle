import { StyleSheet } from 'react-native'
import { BLUE, LIGHT_GREY } from '../../utils/colors'

export const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 20
    },
    line : {
        height : 1,
        flex : 1,
        backgroundColor : LIGHT_GREY
    },
    text : {
        color : BLUE,
        fontWeight : '500',
        marginHorizontal : 8
    }
})

export default styles