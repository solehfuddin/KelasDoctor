import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'
import { HeaderNav, List } from '../../components'

const ChatDoctor = ({ navigation }) => {
    return (
        <View>
            <HeaderNav title="Chat Dokter Umum" type='dark' onPress={() => navigation.goBack()} />
            <List
                type='next'
                imgProfile={DummyDoctor4}
                name='Alexander Jannie'
                message='Wanita' />
            <List
                type='next'
                imgProfile={DummyDoctor5}
                name='Nairoby Putri Haize'
                message='Wanita'
                onPress={() => navigation.navigate('Chatting')} />
            <List
                type='next'
                imgProfile={DummyDoctor6}
                name='John McParker Steve'
                message='Pria' />
        </View>
    )
}

export default ChatDoctor

const styles = StyleSheet.create({})
