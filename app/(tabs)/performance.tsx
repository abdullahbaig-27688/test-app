import React from 'react'
import { StyleSheet, Text, View } from "react-native"
const performance = () => {
    return (
        <View style={styles.ccontainer}>
            <Text>performance</Text>
        </View>
    )
}

export default performance
const styles = StyleSheet.create({
    ccontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})