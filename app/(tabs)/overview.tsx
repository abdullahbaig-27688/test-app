import React from 'react'
import { StyleSheet, Text, View } from "react-native"
const overview = () => {
    return (
        <View style={styles.ccontainer}>
            <Text>overview</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ccontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default overview