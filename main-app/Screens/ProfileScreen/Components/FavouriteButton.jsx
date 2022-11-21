import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const FavouriteButton = () => {

    return (
        <View style={styles.container}>
            <Image source={require('main-app/assets/images/profileScreen/LogoFavourite.png')} style={styles.logoFavourite}/>
            <Text style = {styles.buttonText}>Favourite</Text>
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
    logoFavourite: {
        width: 35,
        height: 35,
    },
})

export default FavouriteButton;