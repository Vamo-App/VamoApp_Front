import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LogoComponent from 'main-app/SharedComponents/LogoComponent.jsx';
import ParchemosButton from '../ParchemoScreen/Components/ParchemosButton';

const MainScreen = () => {
    return(
        <View style = {styles.container}>
            <LogoComponent style = {styles.logo}/>
        </View>

    );

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
    }


})


export default MainScreen;
