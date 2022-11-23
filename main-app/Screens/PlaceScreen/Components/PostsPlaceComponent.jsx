import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


const UserIcon = require('main-app/assets/PlaceIcons/userIcon.png');
const PlusIcon = require('main-app/assets/PlaceIcons/plusIcon.png');

const PostsPlaceComponent= ({idPlace}) => {

    const posts = [
        {
            name: 'Juan',
            description: 'Me encanto el lugar, muy recomendable',
            picture: 'https://thumbs.dreamstime.com/b/gente-divirti%C3%A9ndose-en-una-fiesta-de-a%C3%B1o-nuevo-al-aire-libre-grupo-amigos-soplando-silbatos-bebiendo-cerveza-y-exterior-164545331.jpg'
        },
        {
            name: 'Maria',
            description: 'Es un lugar muy bonito',
            picture: 'https://img.freepik.com/fotos-premium/cerrar-gente-divirtiendose-club_23-2149119651.jpg'
        },
        {
            name: 'Pedro',
            description: 'Los precios son muy buenos',
            picture: 'https://c8.alamy.com/compes/gf69xr/joven-energico-grupo-de-gente-divirtiendose-en-la-ciudad-gf69xr.jpg'
        },
        {
            name: 'Juan',
            description: 'La comida es muy rica',
            picture: 'https://c8.alamy.com/compes/2a5f7tr/grupo-de-mujeres-adultos-mixtos-generaciones-la-gente-divirtiendose-juntos-durante-la-fiesta-de-celebracion-risas-y-sonrisas-y-alegres-mujeres-caucasicas-juntos-h-2a5f7tr.jpg'
        },
    ]

    return (
        <View style={styles.postsInfo}>
            <View style = {styles.header}>
                <Text   style={styles.title}>Recuerdos</Text>
            </View>
                        {
                            posts.map((item, index) => {
                                return (
                                    <View style={styles.postContainer} key = {index}>

                                        <TouchableOpacity style={styles.headerPost}>
                                            <Image source={UserIcon} style={styles.userIcon}/>
                                            <Text style={styles.nameUser}>{item.name}</Text>
                                        </TouchableOpacity>

                                        <Image source={{uri: item.picture }} style={styles.picture}/>
                                        <View style={styles.body}> 
                                            <Text style={styles.textDescription}> {item.description}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        fontFamily: 'QuickSandBold',
        fontSize: 27,
        marginBottom: 10,

    },

    headerPost:{
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        alignItems: 'center',
    },

    postContainer: {
        marginTop: 20,
    },

    userIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    picture: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    nameUser:{
        fontFamily: 'ComfortaaBold',
        marginLeft: 20,
        fontSize: 20,

    },
    body:{

    },
    textDescription: {
        fontFamily: 'ComfortaaLight',
        fontSize: 16,
        textAlign: 'center',
    }


});

export default PostsPlaceComponent;