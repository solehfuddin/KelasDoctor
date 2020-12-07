import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatInput, ChatItem, HeaderNav } from '../../components'
import { MyColors, MyFonts } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <HeaderNav type='dark-profile' title='Nairoby Putri Haiza' onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.date}>Senin, 21 Maret 2020</Text>
                <ChatItem isMe/>
                <ChatItem />
                <ChatItem isMe/>
            </View>
            <ChatInput />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.white,
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    date: {
        fontSize: 11,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        textAlign: 'center',
        marginVertical: 20,
    },
})
