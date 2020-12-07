import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyDoctor9 } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'
import { IconButton } from '../../atoms'

const DarkProfile = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <IconButton icon='back-light' onPress={onPress} />

            <View style={styles.content}>
                <Text style={styles.name}>Nairoby Putri Haiza</Text>
                <Text style={styles.desc}>Dokter Anak</Text>
            </View>
            <Image source={DummyDoctor9} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: MyColors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    avatar: {
        width: 46,
        height: 56,
        borderRadius: 46 / 2,
    },
    name: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.white,
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        marginTop: 6,
        fontFamily: MyFonts.primary.normal,
        textAlign: 'center',
        color: MyColors.text.subtitle,
    },
})
