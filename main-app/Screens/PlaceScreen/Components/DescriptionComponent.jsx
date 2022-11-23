import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const DescriptionComponent = ({description}) => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.textDescription}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    textDescription:{
        fontFamily: 'ComfortaaBold',
        textAlign: 'justify',

    },
    descriptionContainer: {
        paddingVertical: '3%',
    }

});

export default DescriptionComponent ;