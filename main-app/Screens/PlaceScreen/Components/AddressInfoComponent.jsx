import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

const AddressInfoComponent= ({address, city, phone}) => {
    return (
        <View style={styles.adressContainer}>
        <Image source={require('main-app/assets/PlaceIcons/locationIcon.png')} style={styles.locationIcon}></Image>
        <View style={styles.adressInfo}>
            <Text style={styles.infoText}>{address}, {city}</Text>
            <Text style={styles.infoText}>{phone}</Text>
        </View>
    
    </View>
    );
}

const styles = StyleSheet.create({
    
    adressContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    adressInfo: {
        flexDirection: 'column',
        paddingHorizontal: '4%',
    },
    locationIcon: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        tintColor: '#000',
    },
    infoText: {
        fontFamily: 'ComfortaaBold',
    },
});

export default AddressInfoComponent;