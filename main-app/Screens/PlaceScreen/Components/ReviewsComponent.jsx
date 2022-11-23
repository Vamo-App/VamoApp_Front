import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


const UserIcon = require('main-app/assets/PlaceIcons/userIcon.png');
const PlusIcon = require('main-app/assets/PlaceIcons/plusIcon.png');

const TagInfoComponent= ({reviews}) => {
    return (
        <View style={styles.reviewsInfo}>
            <View style = {styles.header}>
                <Text   style={styles.title}>Opiniones</Text>
                <TouchableOpacity>
                    <Image source={PlusIcon} style={styles.userIcon}/>
                </TouchableOpacity>
            </View>
                        {
                            reviews.map((item, index) => {
                                return (
                                    <View style={styles.reviewContainer} key ={index}>
                                        <Image source={UserIcon} style={styles.userIcon}/>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.reviewText}>{item.text}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
        </View>
    );
}

const styles = StyleSheet.create({
    
    reviewsInfo: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
    },
    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFEEC6',
        borderRadius: 30,
        padding: 20,
        marginBottom: 10,
    },
    reviewText: {
        flexWrap: 'wrap',
        fontFamily: 'QuickSandBold',
        fontSize: 16,
    },
    userIcon: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        marginRight: 20,
    },

    textContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        paddingRight: 20,
        marginRight: 20,
    },
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontFamily: 'QuickSandBold',
        fontSize: 27,
        marginBottom: 10,
    }

});

export default TagInfoComponent;