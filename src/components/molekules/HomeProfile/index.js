import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MyColors, MyFonts } from '../../../utils'

const HomeProfile = ({ photo, fullname, pekerjaan, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>

            <View>
                <Text style={styles.name}>{fullname}</Text>
                <Text style={styles.jobs}>{pekerjaan}</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        textTransform: 'capitalize',
    },
    jobs: {
        fontSize: 12,
        fontFamily: MyFonts.primary[400],
        color: MyColors.text.secondary,
        textTransform: 'capitalize',
    },
})
