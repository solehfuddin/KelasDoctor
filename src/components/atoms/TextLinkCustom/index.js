import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MyFonts } from '../../../utils'
import { MyColors } from '../../../utils/MyColors'

const TextLinkCustom = ({title, size, alignText, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.title(size, alignText)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextLinkCustom

const styles = StyleSheet.create({
    title : (size, alignText) => (
        {
            fontSize: size,
            color: MyColors.text.secondary,
            fontFamily: MyFonts.primary.normal,
            textDecorationLine: 'underline',
            textAlign: alignText,
        }
    ),
})
