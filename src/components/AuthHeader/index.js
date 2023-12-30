import { Pressable, Text, Image, View } from "react-native"
import { styles } from "./styles"

const AuthHeader = (props) => {
    return <View style={styles.container}>
        <Pressable onPresss={props.onBackPress} hitStop = {20}>
            <Image style={styles.image} source={require("../../assets/auth_back.png")}/>
        </Pressable>
        <Text style={styles.title}>{props.title}</Text>
    </View>
}

export default AuthHeader