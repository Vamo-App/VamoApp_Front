import React from "react";
import { View, Text , TouchableOpacity, SafeAreaView , StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#2A6E66',
        topMargin: 20,
        width: '80%',
        height: '8%'
    },
});

export default function MyTabBar({ navigation }) {
    return (
        <Button
            title="home"
            onPress={() => {
                navigation.navigate('Home');
            }}
        />
    );
}
