import React, {useState} from "react";
import {  SafeAreaView, ScrollView , StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import BottomSpace from "../../SharedComponents/BottomSpace";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const VamoIcon = require('main-app/assets/Vamo_Logo3_sinFondo.png');
const GoIcon = require('main-app/assets/PlaceIcons/goIcon.png');

const ParcheAmigosScreen = ({navigation}) => {

    const [selectedFriends, setSelectedFriends] = useState([]);

    const [title, setTitle] = useState("Selecciona a tus amigos");

    const [text, onChangeText] = useState("");
    const onChangeSearch = (query) => {
        onChangeText(query);
        console.log(query);
    }

    const addFriend = (friend) => {
        setSelectedFriends([...selectedFriends, friend]);
    }

    const searchFriend = (name) => {
        console.log("searching friend");
    }

    return (
        
        <KeyboardAwareScrollView>

            <SafeAreaView style={styles.container} >
                <View style={styles.title}>
                    <Text style={styles.titleText}>Crear parche de Amigos</Text>
                </View>
                
                <View  style = {styles.textRoundedBox}>
                    <TextInput placeholder='Buscar amigos' 
                    onChangeText={onChangeSearch}
                    value={text}
                    style = {styles.textInput}/>
                </View>
                
                <Text style={styles.friendsTitle}>{title}</Text>

                <View style={styles.friendsContainer}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <Text style={styles.friendsTitle}>

                        </Text>
                    </ScrollView>
                </View> 

                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={VamoIcon} style={styles.vamoButton}/>
                    <Image source={GoIcon} style={styles.goIcon}/>
                </TouchableOpacity>


                <BottomSpace>

                </BottomSpace>
            </SafeAreaView>
        </KeyboardAwareScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '16%',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    scrollView: {
        marginHorizontal: 20,
        paddingBottom: '20%',
        
    },

    textRoundedBox: {
        
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#2A6E66',
        topMargin: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        width: 280,
        height: 60,
        backgroundColor: '#EBF2FA',

    }
    ,
    titleText :{
        fontFamily: 'QuickSandBold',
        fontSize: 27,
        color: '#2A6E66',
        alignItems: 'center',
    },
    barStyle:{
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#2A6E66',
        backgroundColor: '#EBF2FA',
        fontSize: 15,
        fontFamily: 'ComfortaaBold',
        color: '#2A6E66',
    },
    textInput:{
        width: 200,
        fontSize: 15,
        fontFamily: 'QuickSandBold',
        color: '#2A6E66',
    }, 
    friendsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#B6E2A1',
        borderRadius: 30,
        height: 400,
        Width: 320,
        marginHorizontal: 30,
    },
    friendsTitle:{
        textAlign: 'center',
        fontFamily: 'ComfortaaBold',
        fontSize: 20,
    },
    vamoButton:{
        resizeMode: 'contain',
        width: 100,
        height: 50,
    },
    goIcon:{
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#A4BE7B',
        borderRadius: 30,
        width: 200,
        marginBottom: 20,
        marginTop: 20,
        paddingHorizontal: 20,
    }


});
export default ParcheAmigosScreen;