
import React, { Component, useContext, useEffect } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings, Pressable} from 'react-native';
import LogoComponent from 'main-app/SharedComponents/LogoComponent';
import Profile from './Components/Profile';
import VisitedButton from './Components/VisitedButton';
import PendingButton from './Components/PendingButton';
import FavouriteButton from './Components/FavouriteButton';
import Album from './Components/Album';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContext from './../AppContext.js';
import { call } from "./../service.js";
import Card from 'main-app/SharedComponents/Card';

const ProfileScreen= ({navigation, id}) => {

    return (
        <View>
            <ScrollView>

                <Profile id={id}/>

                <TouchableOpacity style={styles.VisitedBtnLayout} onPress={() => navigation.navigate('VisitedScreen', {
                    id: id
                })}>
                    <VisitedButton/>
                </TouchableOpacity>


                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.PendingBtnLayout} onPress={() => navigation.navigate('PendingScreen', {
                        id: id
                    })}>
                        <PendingButton/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FavouriteBtnLayout} onPress={() => navigation.navigate('FavouriteScreen', {
                        id: id
                    })}>
                        <FavouriteButton/>
                    </TouchableOpacity>
                    
                </View>

                <Album/>

                <View style= {{paddingTop: -200}}>

                    <View style={styles.container}>
                        <Card/>
                        <Card/>
                    </View>

                    <View style={styles.container}>
                        <Card/>
                        <Card/>
                    </View>

                </View>

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
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },


});


export default ProfileScreen;