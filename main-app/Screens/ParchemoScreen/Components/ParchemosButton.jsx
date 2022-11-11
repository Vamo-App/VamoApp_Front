import React  from 'react';
import { Text, StyleSheet, Image, TouchableHighlight, View } from 'react-native';

const ParchemosButton = () => {
    return (
            <TouchableHighlight style = {styles.buttonSignIn} >
                <Text style = {styles.buttonText} >Parchemos    </Text>
            </TouchableHighlight>
    
    )

}

const styles = StyleSheet.create({
    buttonSignIn: {
        
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#2A6E66',
        padding: 10,
        paddingVertical: 8,
        topMargin: 20,
        alignItems: 'center',
        width: '80%',
        height: '7%',

    },
    buttonText: {

        color: '#2A6E66',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default ParchemosButton;