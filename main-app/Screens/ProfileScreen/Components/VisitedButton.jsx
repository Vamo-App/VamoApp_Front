import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const VisitedButton = () => {

    return (
        <View style={styles.container}>
            <Image source={require('main-app/assets/images/profileScreen/LogoVisited.png')} style={styles.logoVisited}/>
            <Text style={styles.buttonText}>Visited</Text>
        </View>
    
    )

}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'normal',
        paddingTop: 5,
    },
    logoVisited: {
        width: 35,
        height: 40,
    },
})

export default VisitedButton;