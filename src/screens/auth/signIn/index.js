import { memo } from "react";
import { Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Button from "../../../components/Button";
import GoogleLogin from "../../../components/GoogleLogin";
import Input from "../../../components/input";
import Separator from "../../../components/Separator";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = (props) => {
    return <SafeAreaView style={styles.container}>
        <AuthHeader onBackPress={props.navigation.goBack} title="Sign In"/>
        <Input label="E-mail" placeholder="example@gmail.com"/>
        <Input label="Password" placeholder="**********" isPassword/>
        <Button style={styles.button} title="Sign In" />
        <Separator text="Or Sign in with"/>
        <GoogleLogin/>
        <Text style={styles.footerText}>Don't have an Account? <Text onPress={()=>props.navigation.navigate("SignUp")} style={styles.footerTextBold}>Sign Up</Text></Text>
    </SafeAreaView>
}

export default memo(SignIn);