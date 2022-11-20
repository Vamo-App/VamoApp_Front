import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings} from 'react-native';
import LogoComponent from 'main-app/SharedComponents/LogoComponent';
import Profile from './Components/Profile';
import VisitedButton from './Components/VisitedButton';
import PendingButton from './Components/PendingButton';
import FavouriteButton from './Components/FavouriteButton';
import VamoLogo from './Components/VamoLogo';
import SettingsButton from './Components/SettingsButton';
import Album from './Components/Album';


const ProfileScreen= ({navigation}) => {


    return (
        <View>
            <ScrollView>
                <View style={styles.Header}>
                    <VamoLogo/>
                    <SettingsButton/>
                </View>

                <Profile/>

                <VisitedButton/>

                <View style={styles.containerButtons}>
                    <PendingButton/>
                    <FavouriteButton/>
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

});


export default ProfileScreen;