
import { React, useEffect, useState } from 'react';
import { LogBox, View, StyleSheet, Text, TouchableOpacity , Image } from 'react-native';
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
import HomeScreen from './Home/HomeScreen.jsx';
import TabComponent from './BottomTab/TabComponent.jsx';
import PlaceScreen from './PlaceScreen/PlaceScreen.jsx';
import ParcheAmigosScreen from './ParcheAmigosScreen/ParcheAmigosScreen.jsx';
import VamoScreen from './VamoScreen/VamoScreen.jsx';

import AppContext from './AppContext.js';
import env from './.env.json';

let lastTime = 0;
let token = '';
const tryId = '7ac31efb-d72f-427f-8e64-9c7424f1577b';


LogBox.ignoreLogs(['Remote debugger']);

const ProfileStackNavigator = createNativeStackNavigator();



const MainApp = () => {
    const [lastTime, setLastTime] = useState(0);
    const [token, setToken] = useState('');

    const call = async (method, endpoint, body, stackCount=1) => {

        const tk = await getToken();
        setToken(tk);

        if (tk) {
            if (method === 'GET' || method === 'HEAD') {
                return await fetch(`${env.BACKEND_URL}${endpoint}`, {
                    method: `${method}`,
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tk}`
                    }
                }).then(response => {
                    if (response.status === 204) {
                        return null;
                    } else {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error(`Error connecting to backend ${response.status}`);
                        }
                    }
                })
                .catch((error) => console.error('Error:', error));
            } else {
                return await fetch(`${env.BACKEND_URL}${endpoint}`, {
                    method: `${method}`,
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tk}`
                    },
                    body: JSON.stringify(body) 
                }).then(response => {
                    if (response.status === 204) {
                        return null;
                    } else {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error(`Error connecting to backend ${response.status}`);
                        }
                    }
                })
                .catch((error) => console.error('Error:', error));
            }
        } else {
            // try again
            if (stackCount < 3) {
                console.log('Connection failed, trying again (' + stackCount + ')');
                return await call(method, endpoint, body, stackCount+1);
            } else {
                console.error("Error getting token, couldn't call backend");
                return null;
            }
        }
    };
    
    const getToken = async () => {
        // check that 1.5h haven't passed since last time we got the token
        if (Date.now() - lastTime <= 1.5 * 3600 * 1000) {
            console.log(`Token is still valid, time left: ${1.5 - (Date.now() - lastTime) / 3600 / 1000}h`);
            if (token === '') {
                setLastTime(0);
                return await getToken();
            }
            return token;
        } else {
            console.log("Requesting new token");
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
                console.error(`Error connecting to backend ${error}`);
            });
    
            if (t && 'token' in t) {
                setLastTime(Date.now());
                return t.token;
            } else {
                console.error("Error getting token");
                return '';
            }
    
        }
    }

    return (

        <AppContext.Provider
            value={{
                call: call
            }}>
            <NavigationContainer>
                <ProfileStackNavigator.Navigator 
                    initialRouteName="HomeScreen">

                    <ProfileStackNavigator.Screen 
                        name="ProfileScreen" 
                        options = {{
                            headerTitle: () => <VamoLogo/>,
                            headerRight: () => <SettingsButton/>,
                            headerTransparent: true,

                        }} 
                        initialParams={{id: tryId}}
                        >
                        { props => <ProfileScreen {...props} id={tryId} /> }
                    </ProfileStackNavigator.Screen>


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


                    <ProfileStackNavigator.Screen 
                        name="HomeScreen"   
                        component={HomeScreen}
                        options = {{
                            headerTitle: (''),
                            headerTransparent: true,
                        }} />
                    
                    <ProfileStackNavigator.Screen 
                        name="PlaceScreen"   
                        component={PlaceScreen}
                        options = {{
                            headerTitle: (''),
                            headerTransparent: true,
                        }} />
                    
                    <ProfileStackNavigator.Screen 
                        name="ParcheAmigosScreen"   
                        component={ParcheAmigosScreen}
                        options = {{
                            headerTitle: (''),
                            headerTransparent: true,
                        }} />

                    <ProfileStackNavigator.Screen 
                        name="VamoScreen"   
                        component={VamoScreen}
                        options = {{
                            headerTitle: (''),
                            headerTransparent: true,
                        }} />
                    

                </ProfileStackNavigator.Navigator>

                <TabComponent />

            </NavigationContainer>
        </View>
            
        

    );
}

const styles = StyleSheet.create({
    container: {
        
        position: 'absolute',
        alignSelf: 'center',
        marginTop: '182%',
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',

        
        height: '1%',
        width: '91%',
        borderRadius: 40,
        backgroundColor : '#FFFFFF',
    }
})

export default MainApp;