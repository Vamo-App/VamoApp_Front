import React, { useContext, useEffect, useState }  from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import AppContext from '../Screens/AppContext';

// const Card = ({id}) => {
//     const { call } = useContext(AppContext);

//     const [client, setPost] = useState({});

//     useEffect(() => {
//         const _ = async () => {
//             const posts = await call('GET', `/clients/${/*props.*/id}/posts`, {});
//             setPost(posts);
//         }
//         _().catch(console.error);
//     }, []);

//     return (
//         <View style={styles.card}>
//             <TouchableOpacity>
//                 <Image source={(client && 'picture' in client && client.picture) ? client.picture : require('main-app/assets/images/profileScreen/Trips.png')}
//                     style={styles.logo}>
//                 </Image>
//             </TouchableOpacity>
//         </View>
//     )
// }


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
