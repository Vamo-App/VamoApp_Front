import React  from 'react';
import { Text, StyleSheet, View} from 'react-native';


const BottonMessage = () => {
    return (
    
        <View style = {styles.container} >
            <Text style = {styles.message} >¿No tienes una cuenta?  </Text>
            <Text style = {styles.register} >Registrate</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    message:{
        fontFamily: 'QuickSandBold',
    },

    register:{
        fontFamily: 'QuickSandBold',
        color: '#005C8F',
    }
})

export default BottonMessage;