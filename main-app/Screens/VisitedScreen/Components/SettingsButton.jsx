import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <Image source={require('main-app/assets/images/profileScreen/Settings.png')}
                style={styles.logo}/>                 
        </View>
    
    )

}

const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
        marginTop: 30,
        marginRight: -20,
    },
})

export default Header;