import React, { Component, useEffect, useState, useContext } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, Settings} from 'react-native';
import Profile from './Components/Profile';
import FavouriteButton from './Components/FavouriteButton';
import VamoLogo from './Components/VamoLogo';
import SettingsButton from './Components/SettingsButton';
import Album from './Components/Album';
import Card from 'main-app/SharedComponents/Card';
import AppContext from '../AppContext';


const FavouriteScreen= ({ route, navigation }) => {
    const { id } = route.params;
    const { call } = useContext(AppContext);

    const [liked, setLiked] = useState([]);

    useEffect(() => {
        const _ = async () => {
            const lk = await call('GET', `/clients/${/*props.*/id}/liked`, {});
            setLiked(lk);
        }
        _().catch(console.error);
    }, []);

    return (
        <View>
            <ScrollView>

                <Profile/>
                
                {/* <FavouriteButton/> */}

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


export default FavouriteScreen;