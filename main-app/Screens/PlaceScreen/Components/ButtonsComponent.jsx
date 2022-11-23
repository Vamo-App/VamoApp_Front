import React  from "react";
import { View, TouchableOpacity, Image ,StyleSheet } from "react-native";

const HeartIcon = require('main-app/assets/PlaceIcons/heartIcon.png');
const InternetIcon = require('main-app/assets/PlaceIcons/InternetIcon.png');
const SaveIcon = require('main-app/assets/PlaceIcons/saveIcon.png');
const GoIcon = require('main-app/assets/PlaceIcons/goIcon.png');
const VamoIcon = require('main-app/assets/Vamo_Logo3_sinFondo.png');


function goToPlace(latitude, longitud){
    console.log("Going to place");
}

function goToWebPage(url){
    console.log("Going to place");
}

function addPendingPlace(id){
    console.log("Saving place");
}

function addFavouritePlace(id){
    console.log("Going back");
}

const ButtonsComponent = ({id,url, latitude, longitud}) => {
    
        return (
            <View style={styles.buttonsContainer}>

                <View style={styles.placeButtonsContainer}>
                    <TouchableOpacity style={styles.button} >
                        <Image source={HeartIcon} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    >
                        <Image source={SaveIcon} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    >
                        <Image source={InternetIcon} style={styles.icon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.vamoButtonContainer}>
                    <TouchableOpacity>
                        <Image source={VamoIcon} style={styles.iconVamo}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={GoIcon} style={styles.goIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            );
}

const styles = StyleSheet.create({
    
    buttonsContainer: {
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '110%',
        marginTop: 20,
    },
    placeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    icon:{
        resizeMode: 'contain',
        width: 32,
        height:32,
        marginHorizontal: 3,
        tintColor: '#000000'
    },
    vamoButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9ADCD4',
        
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    iconVamo:{
        resizeMode: 'contain',
        width: 100,
        height: 40,

    },

    goIcon: {
        resizeMode: 'contain',
        width: 15,
        height: 15,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 3,
        borderRadius: 10,
        height: 45,
        width: 45,

    }

});

export default ButtonsComponent;