import React from 'react';
import {StyleSheet, View } from 'react-native';
import LogoComponent from 'main-app/SharedComponents/LogoComponent';
import ParchemosButton from './Components/ParchemosButton';
import BottonMessage from './Components/BottonMessage';


const ParchemosScreen= ({navigation}) => {



    return (
        <View style = {styles.container}>
            <LogoComponent style={styles.logo}/>
            <ParchemosButton/>
            <BottonMessage/>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
    }


});

export default ParchemosScreen
;