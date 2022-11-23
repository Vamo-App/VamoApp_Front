import React from "react";
import { View, TouchableOpacity,Text ,StyleSheet } from "react-native";

const VamoScreen = () => {

    return(
        <View style = {styles.container}>
            <Text style  = {styles.text}>EN PRODUCCION </Text>
        </View>
    )

}

styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '100%',

    },
    text:{
        fontSize: 20,
        fontFamily: 'QuickSandBold',
        color: '#000000',
    }
})

export default VamoScreen;