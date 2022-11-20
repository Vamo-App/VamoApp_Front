import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const VisitedButton = () => {
    return (
        <TouchableOpacity style={styles.buttonLayout} onPress={() => navigation.navigate('PendingScreen')}>
            <Image source={require('main-app/assets/images/profileScreen/LogoPending.png')} style={styles.logoPending}/>
            <Text style = {styles.buttonText}>Pending</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonLayout: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f3dca3',
        width: '45%',
        padding: 15,
        paddingBottom: 15,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 20,

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

export default VisitedButton;