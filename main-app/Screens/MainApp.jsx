import React from 'react';
import { View, Text } from 'react-native';
import { LogBox } from 'react-native';
import MainScreen from './MainScreen/MainScreen.jsx';
import ParchemosScreen from './ParchemoScreen/ParchemosScreen.jsx';
import UserLogin from 'main-app/Screens/Users/LogIn/UserLogin.jsx';

LogBox.ignoreLogs(['Remote debugger']);

const MainApp = () => {
    return (
            <UserLogin/>
    );
}

export default MainApp;