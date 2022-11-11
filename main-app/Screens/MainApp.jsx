import React from 'react';
import { View, Text } from 'react-native';
import { LogBox } from 'react-native';
import MainScreen from './MainScreen/MainScreen.jsx';
import ParchemosScreen from './ParchemoScreen/ParchemosScreen.jsx';

LogBox.ignoreLogs(['Remote debugger']);

const MainApp = () => {
    return (
            <ParchemosScreen/>
    );
}

export default MainApp;