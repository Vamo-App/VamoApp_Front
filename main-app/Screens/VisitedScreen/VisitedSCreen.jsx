import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings} from 'react-native';
import Profile from './Components/Profile';
import VisitedButton from './Components/VisitedButton';
import VamoLogo from './Components/VamoLogo';
import SettingsButton from './Components/SettingsButton';
import Album from './Components/Album';
import Card from 'main-app/SharedComponents/Card';


const VisitedScreen= () => {


    return (
        <View>
            <ScrollView>

                <Profile/>

                <VisitedButton/>

                <View>

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
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    
});


export default VisitedScreen;