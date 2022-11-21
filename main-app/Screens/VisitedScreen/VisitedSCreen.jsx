import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings} from 'react-native';
import Profile from './Components/Profile';
import VisitedButton from './Components/VisitedButton';
import VamoLogo from './Components/VamoLogo';
import SettingsButton from './Components/SettingsButton';
import Album from './Components/Album';


const VisitedScreen= () => {


    return (
        <View>
            <ScrollView>

                <Profile/>

                <VisitedButton/>

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


export default VisitedScreen;