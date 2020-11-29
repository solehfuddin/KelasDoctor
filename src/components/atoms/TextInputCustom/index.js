import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MyFonts } from '../../../utils'
import { MyColors } from '../../../utils/MyColors'

const TextInputCustom = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default TextInputCustom

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: MyColors.border,
        padding: 12,
    },
    label: {
        fontSize: 16,
        color: MyColors.text.secondary,
        marginBottom: 6,
        fontFamily: MyFonts.primary.normal,
    }
})
