import React from 'react';
import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Profile from './Components/Profile';
import VisitedButton from './Components/VisitedButton';
import PendingButton from './Components/PendingButton';
import FavouriteButton from './Components/FavouriteButton';
import Album from './Components/Album';

const ProfileScreen= ({navigation}) => {

    return (
        <View>
            <ScrollView>

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