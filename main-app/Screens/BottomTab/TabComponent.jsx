import React from "react";
import { View,  TouchableOpacity , StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';




const TabComponent = () => {
    const navigation = useNavigation();


    return (
        <View style = {styles.container}>
                <TouchableOpacity style= {styles.button} 
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Image source={require('main-app/assets/MenuIcons/Home.png')} style={styles.image}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.button} 
                    onPress={() => navigation.navigate('ParcheAmigosScreen')}>
                    <Image source={require('main-app/assets/MenuIcons/friends.png')} style={styles.image}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.button}
                    onPress={() => navigation.navigate('VamoScreen')}>
                <Image source={require('main-app/assets/Logo_Vamo_SinFondo.png')} style={styles.image}/>
                </TouchableOpacity>  

                
                <TouchableOpacity style= {styles.button}
                    onPress={() => navigation.navigate('ProfileScreen')}>
                <Image source={require('main-app/assets/MenuIcons/User.png')} style={styles.image}/>
                </TouchableOpacity>  

            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
        position: 'absolute',
        alignSelf: 'center',
        marginTop: '182%',
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',

        
        height: '1%',
        width: '91%',
        borderRadius: 40,
        backgroundColor : '#FFFFFF',
        
        
    },
    button: {
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    image: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
        tintColor: '#000000',
    }
})

export default TabComponent;


/**/ 
