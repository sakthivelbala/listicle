import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignUp from "./src/screens/auth/signup/index";
import Splash from "./src/screens/auth/splash/index";

const App = () =>{

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: 'Listicle-Android', // [Android] specifies an account name on the device that should be used
    });
  }, [])
  

  return <SafeAreaView>
    <SignUp/>
  </SafeAreaView>
}

export default App;