import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings} from 'react-native';
import LogoComponent from 'main-app/SharedComponents/LogoComponent';
import Profile from './Components/Profile';
import PendingButton from './Components/PendingButton';
import VamoLogo from './Components/VamoLogo';
import SettingsButton from './Components/SettingsButton';
import Album from './Components/Album';


const PendingScreen= ({navigation}) => {


    return (
        <View>
            <ScrollView>

                <Profile/>

                <PendingButton/>

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

});


export default PendingScreen;