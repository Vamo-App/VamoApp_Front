import React, {useState} from 'react';
import { StyleSheet, Image, View , Text} from 'react-native';


export default function LogoComponent({style})
{
    return (
        <View style= {styles.logoContainer}>
            <Image style={style} source={require('main-app/assets/LogoVamo1.1-SinFondo.png')}/>
        </View>
    )
};

const styles = StyleSheet.create({

    logoContainer: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})