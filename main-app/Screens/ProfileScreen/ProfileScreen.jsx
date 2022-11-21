import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings, Button, Pressable} from 'react-native';
import LogoComponent from 'main-app/SharedComponents/LogoComponent';
import Profile from './Components/Profile';
import VisitedButton from './Components/VisitedButton';
import PendingButton from './Components/PendingButton';
import FavouriteButton from './Components/FavouriteButton';
import VamoLogo from './Components/VamoLogo';
import SettingsButton from './Components/SettingsButton';
import Album from './Components/Album';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const ProfileScreen= ({navigation}) => {

    return (
        <View>
            <ScrollView>
                <View style={styles.Header}>
                    <VamoLogo/>
                    <SettingsButton/>
                </View>

                <Profile/>

                <TouchableOpacity style={styles.VisitedBtnLayout} onPress={() => navigation.navigate('VisitedScreen')}>
                    <VisitedButton/>
                </TouchableOpacity>


                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.PendingBtnLayout} onPress={() => navigation.navigate('PendingScreen')}>
                        <PendingButton/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FavouriteBtnLayout} onPress={() => navigation.navigate('FavouriteScreen')}>
                        <FavouriteButton/>
                    </TouchableOpacity>
                    
                </View>

                <Album/>

            </ScrollView>
        </View>

    )

}

const styles = StyleSheet.create({
    Header: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 40,
        paddingBottom: 0,
        height: 150,
    },
    containerButtons: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        padding: 10,
        paddingBottom: 10,
        paddingLeft: -20,
        paddingRight: -20,
    },
    VisitedBtnLayout: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor: '#9adcd4',
        width: '45%',
        padding: 15,
        paddingBottom: 15,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 20,
    },
    PendingBtnLayout: {
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#f3dca3',
            width: '45%',
            padding: 15,
            paddingBottom: 15,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
    
    },
    FavouriteBtnLayout: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f2ab99',
        width: '45%',
        padding: 15,
        paddingBottom: 15,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 20,

    },

});


export default ProfileScreen;