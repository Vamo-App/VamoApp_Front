import React from "react";
import { View, Text,StyleSheet  } from "react-native";





const BottomSpace = () => {

    return (
        <View>
            <Text style={styles.bottomSpace}></Text>
        </View>

    );
}


const styles = StyleSheet.create({
    bottomSpace: {
        height: 100,
    },


});
export default BottomSpace;