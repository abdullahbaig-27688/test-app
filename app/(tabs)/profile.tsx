import React from 'react'
import { StyleSheet, Text, View } from "react-native"

const profile = () => {
    return (
        <View style={styles.ccontainer}>
            <Text>profile</Text>
        </View>
    )
}

export default profile
const styles = StyleSheet.create({
    ccontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})