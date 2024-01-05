import { memo } from "react"
import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

const Button = (props) => {
    return <TouchableOpacity activeOpacity={0.6} style={[styles.container, props.style]}>
        <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
}

export default memo(Button)