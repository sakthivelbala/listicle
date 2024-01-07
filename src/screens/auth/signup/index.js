import { memo, useState } from "react";
import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Button from "../../../components/Button";
import Checkbox from "../../../components/checkbox";
import GoogleLogin from "../../../components/GoogleLogin";
import Input from "../../../components/input";
import Separator from "../../../components/Separator";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = (props) => {
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    return <SafeAreaView style={styles.container}>
        <AuthHeader onBackPress={props.navigation.goBack} title="Sign Up"/>
        <Input label="Name" placeholder="John Doe"/>
        <Input label="E-mail" placeholder="example@gmail.com"/>
        <Input label="Password" placeholder="**********" isPassword/>
        <View style={styles.agreeRow}>
            <Checkbox checked={isAgreementChecked} onCheck={setIsAgreementChecked}/>
            <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign Up" />
        <Separator text="Or Sign Up with"/>
        <GoogleLogin/>
        <Text style={[styles.agreeText, styles.footerText]}> Already have an Account? <Text onPress={()=>props.navigation.navigate("SignIn")} style={styles.agreeTextBold}>Sign In</Text></Text>
    </SafeAreaView>
}

export default memo(SignUp);