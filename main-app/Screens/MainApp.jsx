import React from 'react';
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

LogBox.ignoreLogs(['Remote debugger']);

const ProfileStackNavigator = createNativeStackNavigator();

const MainApp = () => {
    return (
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
    );
}

export default MainApp;