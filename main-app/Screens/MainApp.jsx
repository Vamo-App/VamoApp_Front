import { React, useEffect } from 'react';
import { LogBox } from 'react-native';
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

let lastTime = 0;
let token = '';

LogBox.ignoreLogs(['Remote debugger']);

const call = async (method, endpoint, body) => {
    if (method === 'GET' || method === 'HEAD') {
        return await fetch(`${env.BACKEND_URL}${endpoint}`, {
            method: `${method}`,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            }
        }).then(response => {
            if (response.status === 204) {
                return null;
            } else {
                return response.json();
            }
        })
        .catch((error) => console.error('Error:', error));
    } else {
        return await fetch(`${env.BACKEND_URL}${endpoint}`, {
            method: `${method}`,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
            body: JSON.stringify(body) 
        }).then(response => {
            if (response.status === 204) {
                return null;
            } else {
                return response.json();
            }
        })
        .catch((error) => console.error('Error:', error));
    }
};

const getToken = async () => {
    
    // check that 1.5h haven't passed since last time we got the token
    if (Date.now() - lastTime <= 1.5 * 3600 * 1000) {
        console.log(`Token is still valid, time left: ${1.5 - (Date.now() - lastTime) / 3600 / 1000}h`);
        return token;
    } else {
        console.log("Requested new token");
        const authuser = {
            "username": env.ADMIN_USERNAME,
            "password": env.ADMIN_PASSWORD
        }

        const t = await fetch(`${env.BACKEND_URL}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authuser) 
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error connecting to backend ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(error);
        });

        if (t.token) {
            lastTime = Date.now();
            return t.token;
        } else {
            console.error("Error getting token");
            return null;
        }

    }
}

const ProfileStackNavigator = createNativeStackNavigator();

const MainApp = () => {

    useEffect(() => {
        const _ = async () => {
            token = await getToken();
            // EJEMPLO DEL LLAMADO AL BACKEND
            const tags = await call('GET', '/tags', {});
            console.log(tags);
        }
        _().catch(console.error);
    });

    return (
        <AppContext.Provider
            value={{
                getToken: getToken,
                call: call
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