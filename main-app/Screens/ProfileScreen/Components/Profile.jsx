import React, { useContext, useEffect, useState }  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import AppContext from '../../AppContext';

const Profile = ({id}) => {
    const { call } = useContext(AppContext);

    const [client, setClient] = useState({});

    useEffect(() => {
        const _ = async () => {
            const cl = await call('GET', `/clients/${/*props.*/id}`, {});
            setClient(cl);
        }
        _().catch(console.error);
    }, []);

    return (
        <View style={styles.profile}> 
                <TouchableOpacity>
                    <Image source={(client && 'picture' in client && client.picture) ? client.picture : require('main-app/assets/images/profileScreen/ProfilePicture.png')}
                        style={styles.profilePicture}>
                    </Image>
                </TouchableOpacity>
            <Text style={styles.profileName}>{(client && 'name' in client && client.name) ? client.name : 'Santiago Farid'}</Text>
            <Text>{(client && 'description' in client && client.description) ? client.description : 'Conocedor del mundo!!'}</Text>
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