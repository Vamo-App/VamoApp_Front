import React from "react";
import { View, Text , TouchableOpacity, SafeAreaView , StyleSheet, Image } from "react-native";

const PlaceScreen = () => {
    return (
        <View style= {styles.container}>
            <View style= {styles.imageContainer}>

            </View>

            <Image source={require('main-app/assets/TestImages/TestImage.png')} 
                    style = {styles.mainImage} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
        topMargin: 120,
    }, 
    mainImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '',
    },

    imageContainer: {
    }

});
export default PlaceScreen;