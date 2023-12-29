import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

const Button = (props) => {
    return <TouchableOpacity opacity={0.6} style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
}

export default Button