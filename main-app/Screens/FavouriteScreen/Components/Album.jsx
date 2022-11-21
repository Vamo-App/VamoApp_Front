import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const Album = () => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.title}>Albums</Text>
            <Image source={require('main-app/assets/images/profileScreen/Plus.png')} style={styles.plus}/>   
        </View>
    
    )

}

const styles = StyleSheet.create({
    topBar: {
        padding: 30,
        width: '100%',
        height: 150,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    plus: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginLeft: -5,
    },
})

export default Album;