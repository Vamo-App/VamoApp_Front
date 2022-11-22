import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Card(img) {
    return (
        <View style={[styles.card]}>
            <Image source={require('main-app/assets/images/profileScreen/Trips.png')}
                style={styles.logo}/>  
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 7,
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    logo: {
        width: 150,
        height: 150,
    }
})
