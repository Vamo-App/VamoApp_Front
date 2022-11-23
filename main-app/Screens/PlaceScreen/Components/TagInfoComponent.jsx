import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const TagInfoComponent= ({tags}) => {
    return (
        <View style={styles.tagsInfo}>
                        {
                            tags.map((item, index) => {
                                return (
                                    <View style={styles.tagContainer} key = {index}>
                                        <Text style={styles.tagText}>{item.tag}</Text>
                                    </View>
                                )
                            })
                        }
        </View>
    );
}

const styles = StyleSheet.create({
    
    tagsInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    tagContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A4BE7B',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        marginHorizontal: '2%',
        marginVertical: '2%',
        borderRadius: 20,
    },
    tagText: {
        fontFamily: 'QuickSandBold',
        fontSize: 16,
    }

});

export default TagInfoComponent;