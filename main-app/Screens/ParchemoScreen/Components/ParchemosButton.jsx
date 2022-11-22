import React  from 'react';
import { Text, StyleSheet, Image, TouchableHighlight, View } from 'react-native';

const ParchemosButton = () => {
    return (
            <TouchableHighlight style = {styles.buttonSignIn} >
                <Text style = {styles.buttonText} >Parchemos</Text>
            </TouchableHighlight>
    
    )

}

const styles = StyleSheet.create({
    buttonSignIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#2A6E66',
        topMargin: 20,
        width: '80%',
        height: '8%',

    },
    buttonText: {
        color: '#2A6E66',
        fontSize: 20,
        fontFamily: 'QuickSandBold',
    }
})

export default ParchemosButton;