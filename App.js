import React from "react";
import { SafeAreaView } from "react-native";
import SignUp from "./src/screens/auth/signup/index";
import Splash from "./src/screens/auth/splash/index";

const App = () =>{
  return <SafeAreaView>
    <SignUp/>
  </SafeAreaView>
}

export default App;