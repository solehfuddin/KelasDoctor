import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { MyColors, MyFonts } from '../../../utils'
import IconButtonSend from '../../atoms/IconButton/IconButtonSend'

const ChatInput = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Tulis pesan untuk Nairoby'/>
            <IconButtonSend />
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
    input : {
        backgroundColor: MyColors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: MyFonts.primary.normal,
        maxHeight: 45,
    },
})
