import { React, useContext } from 'react';
import { LogBox } from 'react-native';
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

var lastTime = 0;
var token = '';

LogBox.ignoreLogs(['Remote debugger']);

const getToken = async () => {
    
    // check that 1.5h haven't passed since last time we got the token
    if (Date.now() - lastTime <= 1.5 * 3600 * 1000) {
        return token;
    } else {
        const t = await fetch(`${env.BACKEND_URL}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": env.ADMIN_USERNAME,
                "password": env.ADMIN_PASSWORD
            }) 
        }).then(response => response.json());

        token = t.token;
        lastTime = Date.now();
        return token;
    }
}

const ProfileStackNavigator = createNativeStackNavigator();

const MainApp = () => {
    console.log(env.ADMIN_USERNAME);
    const { token } = getToken();
    return (
        <AppContext.Provider
            value={{
                getToken: getToken
            }}>
            <NavigationContainer>
                <ProfileStackNavigator.Navigator 
                    initialRouteName="ProfileScreen">

                    <ProfileStackNavigator.Screen 
                        name="ProfileScreen" 
                        component={ProfileScreen}
                        options = {{
                            headerTitle: () => <VamoLogo/>,
                            headerRight: () => <SettingsButton/>,
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
        </AppContext.Provider>
    );
}

export default MainApp;