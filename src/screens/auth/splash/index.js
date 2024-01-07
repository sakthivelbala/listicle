import { memo } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button/index";
import { styles } from "./styles";

const Splash = (props) => {
    return <SafeAreaView style={styles.container}>
        <Image resizeMode='contain' style={styles.image} source={require("../../../assets/splash_image.png")}/>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
        </View>
        <Button onPress={()=>props.navigation.navigate("SignUp")} title="Sign Up"/>
        <Pressable hitStop={20} onPress={()=>props.navigation.navigate("SignIn")}>
            <Text  style={styles.footerText}>Sign In</Text>
        </Pressable>
    </SafeAreaView>
}

export default memo(Splash);