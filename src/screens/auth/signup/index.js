import { useState } from "react";
import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader/index";
import Button from "../../../components/Button/index";
import Checkbox from "../../../components/checkbox";
import Input from "../../../components/input";
import { styles } from "./styles";

const SignUp = () => {
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    return <View style={styles.container}>
        <AuthHeader title="Sign Up"/>
        <Input label="Name" placeholder="John Doe"/>
        <Input label="E-mail" placeholder="example@gmail.com"/>
        <Input label="Password" placeholder="**********" isPassword/>
        <View style={styles.agreeRow}>
            <Checkbox checked={isAgreementChecked} onCheck={setIsAgreementChecked}/>
            <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign Up" />

        
        <Text style={styles.agreeText}> Already have an Account? <Text style={styles.agreeTextBold}>Sign In</Text></Text>
    </View>
}

export default SignUp;