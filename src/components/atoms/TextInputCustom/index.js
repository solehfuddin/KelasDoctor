import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MyFonts } from '../../../utils'
import { MyColors } from '../../../utils/MyColors'

const TextInputCustom = ({ label, value, onChangeText, secureTextEntry, disable }) => {
    const [borderState, setBorderState] = useState(MyColors.border)
    const onFocusText = () => {
        setBorderState(MyColors.primary)
    }
    const onBlurText = () => {
        setBorderState(MyColors.border)
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onFocus={onFocusText}
                onBlur={onBlurText}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable}
                style={styles.input(borderState)} />
        </View>
    )
}

export default TextInputCustom

const styles = StyleSheet.create({
    input: (borderState) => (
        {
            borderWidth: 1,
            borderRadius: 10,
            borderColor: borderState,
            padding: 12,
        }
    ),
    label: {
        fontSize: 16,
        color: MyColors.text.secondary,
        marginBottom: 6,
        fontFamily: MyFonts.primary.normal,
    }
})
