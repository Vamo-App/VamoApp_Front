import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import HomeIcon from '../assets/MenuIcons/Home.png';
import UserIcon from '../assets/MenuIcons/User.png';
import FriendsIcon from '../assets/MenuIcons/friends.png';

import HomeScreen from '../Screens/Home/HomeScreen';
import UserLogin from '../Screens/Users/LogIn/UserLogin';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabComponent from '../Screens/BottomTab/TabComponent';
import PlaceScreen from '../Screens/PlaceScreen/PlaceScreen';

const Tab = createBottomTabNavigator();

const icons = {
    home: require('../assets/MenuIcons/Home.png'),
    user: require('../assets/MenuIcons/User.png'),
    friends: require('../assets/MenuIcons/friends.png'),

    focusedColor : '#2A6E66',
    normalColor : '#000000'    
}

const BottomTab = () => {

    return (
        <Tab.Navigator
        screenOptions={
            ({route}) => ({
                tabBarIcon: ({ focused }) => {
                        let icon;
                        let iconColor = icons.normalColor; 
            
                        if (route.name === 'Home') {
                            icon = focused
                            ? icons.home
                            : null;
                        } else if (route.name === 'Settings') {
                            icon = focused ? icons.user : null;
                        }

                        if(focused){
                            iconColor = icons.focusedColor;
                        }
            
                        return <Image source={icon} style={{width: 40, height: 30, tintColor: iconColor}} />
                    },
            })
        }
        >
            <Tab.Screen name="Home" component={UserLogin} options={{
                title: '',
                headerTransparent: true, 
                headerTitle: '',
            }} />

            <Tab.Screen name="PlaceScreen" component={PlaceScreen} options={{
                title: '',
                headerTransparent: true, 
                headerTitle: '',
            }} />


        </Tab.Navigator> 
    );
}

export default BottomTab;
