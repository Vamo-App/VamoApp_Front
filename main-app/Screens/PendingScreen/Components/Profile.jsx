import React  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.profile}> 
                <TouchableOpacity>
                    <Image source={require('main-app/assets/images/profileScreen/ProfilePicture.png')} 
                        style={styles.profilePicture}>
                    </Image>
                </TouchableOpacity>
            <Text style={styles.profileName}>Nombre de usuario</Text>
        </View>
    
    )

}

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
    },
    profilePicture: {
        width: 140,
        height: 140,
        borderRadius: 100,
        marginTop: 100,
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10
    },
})

export default Profile;