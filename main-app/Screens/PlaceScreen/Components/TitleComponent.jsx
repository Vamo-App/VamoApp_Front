import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const TitleCoponent= ({title}) => {
    return (
        <View >
            <Text style={styles.infoTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    infoTitle: {
        flexWrap: 'wrap',
        fontFamily: 'QuickSandBold',
        fontSize: 25,
        marginBottom: 10,
    },
});

export default TitleCoponent;