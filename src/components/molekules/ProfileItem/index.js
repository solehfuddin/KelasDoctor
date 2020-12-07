import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MyColors, MyFonts } from '../../../utils'

const ProfileItem = ({label, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.border,
    },
    label: {
        fontSize: 14,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        marginBottom: 6,
    },
    value: {
        fontSize: 14,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.primary,
    },
})
