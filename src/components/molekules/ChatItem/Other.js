import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor9 } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor9} style={styles.avatar} />
            <View>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Ibu dokter, apakah makan jeruk tiap hari itu buruk?
            </Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        flexDirection: 'row',

    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        marginRight: 12,
    },
    content: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: MyColors.primary,
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    text: {
        fontSize: 14,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.white,
    },
    date: {
        fontSize: 11,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        marginTop: 8,
    },
})
