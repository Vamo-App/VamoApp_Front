import React from 'react';
import { LogBox, View, StyleSheet, Text, TouchableOpacity , Image} from 'react-native';
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

LogBox.ignoreLogs(['Remote debugger']);

const ProfileStackNavigator = createNativeStackNavigator();



const MainApp = () => {
    return (
        
        <View style = {{flex:1, }}>

            <NavigationContainer>
                <ProfileStackNavigator.Navigator 

                    initialRouteName="HomeScreen">

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