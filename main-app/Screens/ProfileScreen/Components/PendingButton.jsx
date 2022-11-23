import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PendingButton = () => {

    return (
        <View style={styles.container}>
            <Image source={require('main-app/assets/images/profileScreen/LogoPending.png')} style={styles.logoPending}/>
            <Text style = {styles.buttonText}>  Pending</Text>
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
    logoPending: {
        width: 35,
        height: 35,
    },
})

export default PendingButton;