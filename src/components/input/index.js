import { memo, useState } from "react"
import { Text, View, TextInput, Image, Pressable  } from "react-native"
import { styles } from "./styles"

const Input = (props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibile = () => {
        setIsPasswordVisible(passwordVisibility=>!passwordVisibility);
    }
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputContainer}>
            <TextInput value={props.value} onChangeText={props.onChangeText} secureTextEntry={props.isPassword && !isPasswordVisible} placeholder={props.placeholder} style={[styles.input, props.style ? props.style : {}]} multiline={props.multiline}/>
            {props.isPassword && <Pressable onPress={togglePasswordVisibile}>
                <Image style={styles.eye}  source={ isPasswordVisible ? require("../../assets/eye.png") : require("../../assets/eye_closed.png")} />
            </Pressable>}
        </View>
    </View>
}

export default memo(Input)