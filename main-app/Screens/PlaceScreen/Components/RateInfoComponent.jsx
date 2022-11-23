import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Rating } from 'react-native-ratings';

const RateInfoComponent= ({average}) => {

    const averageString = average.toString();

    return (
        <View style={styles.rateInfo}>
            <Rating
                            type='star'
                            readonly= {true}
                            startingValue={average}
                            tintColor	='#FDDBD3'
                            ratingCount={5}
                            imageSize={30}
                            style={{ paddingVertical: 10 }}
                            />
                        <Text style={styles.averageText}>{averageString}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    rateInfo: {
        paddingTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    averageText: {
        fontFamily: 'QuickSandBold',
        fontSize: 24,
        paddingLeft: '6%',
    }
});

export default RateInfoComponent;