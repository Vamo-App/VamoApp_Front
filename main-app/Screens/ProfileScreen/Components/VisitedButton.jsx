import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const VisitedButton = () => {
    return (
        <TouchableOpacity style={styles.buttonLayout} onPress={() => navigation.navigate('VisitedScreen')}>
            <Image source={require('main-app/assets/images/profileScreen/LogoVisited.png')} style={styles.logoVisited}/>
            <Text style={styles.buttonText}>Visited</Text>
        </TouchableOpacity>
    
    )

}

const styles = StyleSheet.create({
    buttonLayout: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor: '#9adcd4',
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
    logoVisited: {
        width: 35,
        height: 40,
    },
})

export default VisitedButton;