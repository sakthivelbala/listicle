import { TouchableOpacity, View, Image } from "react-native"
import { styles } from "./styles"

const Checkbox = (props) => {
    return <TouchableOpacity activeOpacity={0.6} onPress={()=>props.onCheck(checked=>!checked)} style={styles.container}>
        {props.checked && (<View style={styles.innerContainer}>
            <Image style={styles.icon} source={require("../../assets/check.png")}/>
        </View>)}
    </TouchableOpacity>
}

export default Checkbox