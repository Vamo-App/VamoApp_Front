import React from 'react';
import { LogBox } from 'react-native';
import UserLogin from 'main-app/Screens/Users/LogIn/UserLogin.jsx';

LogBox.ignoreLogs(['Remote debugger']);

const MainApp = () => {
    return (
            <UserLogin/>
    );
}

export default MainApp;