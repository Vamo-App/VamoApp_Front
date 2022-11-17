import React from 'react';
import { View, Image , StyleSheet, TouchableHighlight} from 'react-native';

const AlternativesComponent = () => {
    return (
        <View style = {styles.container}>
            <TouchableHighlight style = {styles.iconContainer} >
                <Image style={styles.icon} source= {require('main-app/assets/google.png')}/>
            </TouchableHighlight>
            <TouchableHighlight style = {styles.iconContainer} >
                <Image style={styles.icon} source= {require('main-app/assets/facebook.png')}/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        resizeMode: 'contain',
        width: 40,
        height: 40,
        borderRadius: 10,
        padding: 10,

    },
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#D9D9D9',
        borderRadius: 10,
        height: 65,
        width: 65,
        margin: 13,
    }
})

export default AlternativesComponent;