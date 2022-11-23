import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image source={require('main-app/assets/images/profileScreen/Settings.png')}
                    style={styles.logo}/>                 
            </TouchableOpacity>
        </View>
    
    )

}

const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
    },
})

export default Header;