import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader/index";
import Input from "../../../components/input";
import { styles } from "./styles";

const SignUp = () => {
    return <View style={styles.container}>
        <AuthHeader title="Sign Up"/>
        <Input label="Name" placeholder="John Doe"/>
        <Input label="E-mail" placeholder="example@gmail.com"/>
        <Input label="Password" placeholder="**********" isPassword/>
    </View>
}

export default SignUp;