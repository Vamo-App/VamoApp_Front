import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const ButtonSignInComponent = () => {
    return(
            <TouchableHighlight style = {styles.buttonSignIn} >
                <Text style = {styles.buttonText} >Iniciar sesión</Text>
            </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonSignIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        backgroundColor: '#2C9D90',
        topMargin: 20,
        width: 290,
        height: 60,
        paddingBottom:2,

    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'QuickSandBold',
    }
})

export default ButtonSignInComponent;
