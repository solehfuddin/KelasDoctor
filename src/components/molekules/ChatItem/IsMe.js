import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MyColors, MyFonts } from '../../../utils'

const IsMe = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.text}>
                Ibu dokter, apakah makan jeruk tiap hari itu buruk?
            </Text>
            </View>
            <Text style={styles.date}>4.20 AM</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
    },
    content: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: MyColors.cardLight,
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0,
    },
    text: {
        fontSize: 14,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.primary,
    },
    date: {
        fontSize: 11,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        marginTop: 8,
    },
})
