import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

const splash = () => {
    return (
        <View style={styles.pages}>
            <ILLogo />
            <Text style={styles.widget}>My Doctor</Text>
        </View>
    )
}

export default splash

const styles = StyleSheet.create({
    pages: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    widget: {
        fontSize: 20,
        fontWeight: '600',
        color: '#112340',
        marginTop: 20
    }
})
