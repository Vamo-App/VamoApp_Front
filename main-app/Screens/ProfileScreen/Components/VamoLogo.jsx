import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <Image source={require('main-app/assets/LogoVamo1.1-SinFondo.png')}
                style={styles.logo}/>                 
        </View>
    
    )

}

const styles = StyleSheet.create({
    logo: {
        width: 90,
        height: 65,
    },
})

export default Header;