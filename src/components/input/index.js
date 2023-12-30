import { useState } from "react"
import { Text, View, TextInput } from "react-native"
import { styles } from "./styles"

const Input = (props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(props.isPassword)
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputContainer}>
            <TextInput secureTextEntry={props.isPassword} placeholder={props.placeholder} style={styles.input}/>
        </View>
    </View>
}

export default Input