import React from 'react';
import { View, Text } from 'react-native';
import { LogBox } from 'react-native';
import MainScreen from './MainScreen/MainScreen.jsx';
import ParchemosScreen from './ParchemoScreen/ParchemosScreen.jsx';
import ProfileScreen from "./ProfileScreen/ProfileScreen.jsx";
import VisitedScreen from "./VisitedScreen/VisitedScreen.jsx";
import PendingScreen from "./PendingScreen/PendingScreen.jsx";
import FavouriteScreen from "./FavouriteScreen/FavouriteScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

LogBox.ignoreLogs(['Remote debugger']);

const ProfileStackNavigator = createNativeStackNavigator();

const MainApp = () => {
    return (
        <NavigationContainer>
            <ProfileStackNavigator.Navigator 
                initialRouteName="ProfileScreen">

                <ProfileStackNavigator.Screen 
                    name="ProfileScreen" 
                    component={ProfileScreen} />
                
                <ProfileStackNavigator.Screen 
                    name="VisitedScreen" 
                    component={VisitedScreen} />

                <ProfileStackNavigator.Screen 
                    name="PendingScreen" 
                    component={PendingScreen} />

                <ProfileStackNavigator.Screen 
                    name="FavouriteScreen"   
                    component={FavouriteScreen} />

            </ProfileStackNavigator.Navigator>
        </NavigationContainer>
    );
}

export default MainApp;