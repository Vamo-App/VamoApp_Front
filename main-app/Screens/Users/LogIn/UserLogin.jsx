import React from 'react';
import { View, Image , StyleSheet, Text} from 'react-native';
import InputContainerComponent from './Components/InputContainerComponent.jsx';
import ButtonSignInComponent from './Components/ButtonSignInComponent.jsx';
import AlternativesComponent from './Components/AlternativesComponent.jsx';

const UserLogin = () => {
    return (
        <View style = {styles.container}>
            <Image style={styles.logo} source={require('main-app/assets/VamoSmall_SinFondo.png')}/>
            <InputContainerComponent/>
            <ButtonSignInComponent/>
            <Image style={styles.bottomLogo} source= {require('main-app/assets/BottomLogin.png')}/>
            <AlternativesComponent/>
            <View style={styles.bottomMessageContainer}>
                <Text style={styles.normalText}>¿No tienes cuenta?  </Text>
                <Text style={styles.registerText}>Registrate</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        resizeMode: 'contain',
        width: 140,
        height: 100,

    },
    bottomLogo:{
        resizeMode: 'contain',
        width: 260,
        height: 60,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F9FE'
    },
    bottomMessageContainer:{
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalText:{
        fontSize: 14,
        fontFamily: 'QuickSandBold',
    },
    registerText:{
        fontSize: 14,
        fontFamily: 'QuickSandBold',
        color: '#005C8F'

    }
    
})

export default UserLogin;

