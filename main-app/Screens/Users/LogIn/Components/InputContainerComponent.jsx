import React from "react";
import { View, StyleSheet , TextInput} from "react-native";

const InputContainerComponent = () => {
    return (
        <View style = {styles.SignInContainer}>
            <TextInput placeholder='Correo Electronico' style = {styles.textRoundedBox} />
            <TextInput placeholder='Contraseña' style = {styles.textRoundedBox} />
        </View>
    );
}

const styles = StyleSheet.create({

    
    textRoundedBox: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#2A6E66',
        color: '#2A6E66',
        topMargin: 20,
        marginBottom: 20,
        paddingHorizontal: 25,
        width: 280,
        height: 60,
        backgroundColor: '#EBF2FA',
        fontSize: 15,
        fontFamily: 'QuickSandBold',

    },
    SignInContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 10
    },

})
export default InputContainerComponent;