import React from "react";
import { View, Text, SafeAreaView, ScrollView , StyleSheet, Image  } from "react-native";
import AddressInfoComponent from "./Components/AddressInfoComponent";
import ButtonsComponent from "./Components/ButtonsComponent";
import DescriptionComponent from "./Components/DescriptionComponent";
import RateInfoComponent from "./Components/RateInfoComponent";
import TagInfoComponent from "./Components/TagInfoComponent";
import TitleCoponent from "./Components/TitleComponent";
import ReviewsComponent from "./Components/ReviewsComponent";
import PostsPlaceComponent from "./Components/PostsPlaceComponent";
import BottomSpace from "../../SharedComponents/BottomSpace";


const props = 
        {
            id: 'House',
            name: 'The Monkey House',
            picture: 'https://themonkeyhouse.co/tmh/wp-content/uploads/2022/06/fachada-monkey-house-vertical.jpg',
            country: 'Colombia',
            description: 'Somos reconocidos por ser el lugar donde puedes encontrar una extraordinaria oferta gastronómica maridada con las más exquisitas cervezas.',
            state: 'House',
            city: 'Bogotá',
            average: 4.1,
            neighborhood: 'Chapinero',
            address: 'Cl. 70a #8-55',
            addressLabel: 'House',
            latitude: '4.656066',
            longitude: '-74.059591',
            phone: '3204799552',
            webSite: 'https://themonkeyhouse.co/tmh/',
            tags: [
                {
                    tag: 'Restaurante',
                },
                {
                    tag: 'Bar',
                },
                {
                    tag: 'Cervecería',
                }
            ],
            reviews: [
                {
                    id: '1',
                    text: 'Excelente lugar para ir con amigos, la comida es muy buena y el ambiente es muy agradable.',
                },
                {
                    id: '2',
                    text: 'La comida es muy buena y el ambiente es muy agradable.',
                },
                {
                    id: '3',
                    text: 'El ambiente es muy agradable.',
                },
                {
                    id: '4',
                    text: 'La comida es muy buena.',
                },
            ]
        }



const PlaceScreen = () => {

    
    const averageString = props.average.toString();

    return (

        
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                <Image source={{uri: props.picture}} 
                        style = {styles.mainImage} />
                <View style={styles.infoContainer}>

                    <TitleCoponent 
                        title={props.name}>
                    </TitleCoponent>

                    <AddressInfoComponent 
                        address={props.address}
                        phone={props.phone}
                        city={props.city}>
                    </AddressInfoComponent>

                    <RateInfoComponent 
                        average={props.average}>
                    </RateInfoComponent>

                    <TagInfoComponent
                        tags = {props.tags}>
                    </TagInfoComponent>

                    <DescriptionComponent
                        description={props.description}>
                    </DescriptionComponent>

                    <ButtonsComponent
                        id ={props.id}
                        url = {props.webSite}
                        latitude = {props.latitude}
                        longitud = {props.longitud}>
                    </ButtonsComponent>

                </View>

                <PostsPlaceComponent
                    id = {props.id}>
                </PostsPlaceComponent>
                
                <ReviewsComponent
                        reviews={props.reviews}>

                </ReviewsComponent>

                

                <BottomSpace>
                </BottomSpace>
            </ScrollView>

        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '20%',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    scrollView: {
        marginHorizontal: 20,
        showScrollIndicators: false,
        paddingBottom: '20%',
        
    },
    mainImage: {
        alignSelf: 'center',
        
        resizeMode: 'contain',
        width: 360,
        height: 450,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '',
    },
    infoContainer: {

        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '-4%',
        borderRadius: 30,
        borderColor: '',
        backgroundColor: '#FDDBD3',
        padding: '10%',
        paddingHorizontal: '12%',
        
    }

});
export default PlaceScreen;