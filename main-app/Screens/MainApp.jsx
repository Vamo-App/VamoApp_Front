import { React, useEffect } from 'react';
import { LogBox, TouchableOpacity } from 'react-native';
import UserLogin from 'main-app/Screens/Users/LogIn/UserLogin.jsx';
import MainScreen from './MainScreen/MainScreen.jsx';
import ParchemosScreen from './ParchemoScreen/ParchemosScreen.jsx';
import ProfileScreen from "./ProfileScreen/ProfileScreen.jsx";
import VisitedScreen from "./VisitedScreen/VisitedScreen.jsx";
import PendingScreen from "./PendingScreen/PendingScreen.jsx";
import FavouriteScreen from "./FavouriteScreen/FavouriteScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VamoLogo from './ProfileScreen/Components/VamoLogo';
import SettingsButton from './ProfileScreen/Components/SettingsButton';
import AppContext from './AppContext.js';
import env from './.env.json';

// let lastTime = 0;
// let token = '';

LogBox.ignoreLogs(['Remote debugger']);

// const getToken = async () => {
    
//     // check that 1.5h haven't passed since last time we got the token
//     if (Date.now() - lastTime <= 1.5 * 3600 * 1000) {
//         console.log(`Token is still valid, time left: ${1.5 - (Date.now() - lastTime) / 3600 / 1000}h`);
//         return token;
//     } else {
//         console.log("Requested new token");
//         const authuser = {
//             "username": env.ADMIN_USERNAME,
//             "password": env.ADMIN_PASSWORD
//         }

//         const t = await fetch(`${env.BACKEND_URL}/auth/login`, {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(authuser) 
//         }).then(response => response.json())
//         .catch((error) => {
//             console.error('Error:', error);
//         });

//         lastTime = Date.now();
//         return t.token;
//     }
// }

const ProfileStackNavigator = createNativeStackNavigator();

const MainApp = () => {

    // useEffect(() => {
    //     const _ = async () => {
    //         token = await getToken();
    //         getToken();
    //     }
    //     _().catch(console.error);
    // });

    return (
        // <AppContext.Provider
        //     value={{
        //         getToken: getToken
        //     }}>
            <NavigationContainer>
                <ProfileStackNavigator.Navigator 
                    initialRouteName="ProfileScreen">

                    <ProfileStackNavigator.Screen 
                        name="ProfileScreen" 
                        component={ProfileScreen}
                        options = {{
                            headerTitle: () => <VamoLogo/>,
                            headerRight: () => 
                            <TouchableOpacity>
                                <SettingsButton/>
                            </TouchableOpacity>,
                            headerTransparent: true,
                        }} />
                    
                    <ProfileStackNavigator.Screen 
                        name="VisitedScreen" 
                        component={VisitedScreen}
                        options = {{
                            headerTitle: (''),
                            headerRight: () => <SettingsButton/>,
                            headerTransparent: true,
                        }} />

                    <ProfileStackNavigator.Screen 
                        name="PendingScreen" 
                        component={PendingScreen}
                        options = {{
                            headerTitle: (''),
                            headerRight: () => <SettingsButton/>,
                            headerTransparent: true,
                        }} />

                    <ProfileStackNavigator.Screen 
                        name="FavouriteScreen"   
                        component={FavouriteScreen}
                        options = {{
                            headerTitle: (''),
                            headerRight: () => <SettingsButton/>,
                            headerTransparent: true,
                        }} />

                </ProfileStackNavigator.Navigator>
            </NavigationContainer>
        // </AppContext.Provider>
    );
}

export default MainApp;