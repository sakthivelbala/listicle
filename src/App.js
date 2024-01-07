import React, {useEffect} from "react";
import { Image } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignUp from "./screens/auth/signUp";
import Splash from "./screens/auth/splash";
import { NavigationContainer } from "@react-navigation/native";
import signIn from "./screens/auth/signIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LIGHT_GREY, WHITE } from "./utils/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/app/Home";
import Favorites from "./screens/app/Favorites";
import Profile from "./screens/app/Profile";
import {styles} from './styles'

const App = () =>{

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isSignedIn = true;

  const theme = {
    colors : {
      background : WHITE
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: 'Listicle-Android', // [Android] specifies an account name on the device that should be used
    });
  }, [])
  

  return <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {isSignedIn ?
        <>
          <Stack.Screen name="Tabs" children={()=><Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel: false, tabBarStyle : {borderTopColor : LIGHT_GREY, backgroundColor : WHITE}}}>
              <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({focused})=><Image style={styles.icon} source={focused?require('./assets/tabs/home_active.png'):require('./assets/tabs/home.png')}/>}}/>
              <Tab.Screen name="Favorites" component={Favorites} options={{tabBarIcon:({focused})=><Image style={styles.icon} source={focused?require('./assets/tabs/bookmark_active.png'):require('./assets/tabs/bookmark.png')}/>}}/>
              <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({focused})=><Image style={styles.icon} source={focused?require('./assets/tabs/profile_active.png'):require('./assets/tabs/profile.png')}/>}}/>
            </Tab.Navigator>} />
        </> :
        <>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SignIn" component={signIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider> 
}

export default App;