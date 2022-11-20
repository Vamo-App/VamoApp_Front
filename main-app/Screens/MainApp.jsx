import React from 'react';
import { View, Text } from 'react-native';
import { LogBox } from 'react-native';
import MainScreen from './MainScreen/MainScreen.jsx';
import ParchemosScreen from './ParchemoScreen/ParchemosScreen.jsx';
import ProfileScreen from './ProfileScreen/ProfileScreen.jsx';

LogBox.ignoreLogs(['Remote debugger']);

const MainApp = () => {
    return (
            <ProfileScreen/>
    );
}

export default MainApp;