import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconRemovePhoto } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'

const Profile = ({ name, desc, photo, isRemove, onPress }) => {
    return (
        <View style={styles.container}>

            {!isRemove && (
                <View style={styles.content}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove && <IconRemovePhoto style={styles.removeIcon} />}
                </View>
            )}


            {isRemove && (
                <TouchableOpacity style={styles.content} onPress={onPress}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove && <IconRemovePhoto style={styles.removeIcon} />}
                </TouchableOpacity>
            )}

            {name && (
                <View style={styles.wrapperInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.jobs}>{desc}</Text>
                </View>
            )}

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: MyColors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    removeIcon: {
        position: 'absolute',
        bottom: 8,
        right: 8,
    },
    wrapperInfo: {
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 16,
    },
    jobs: {
        fontSize: 16,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.secondary,
        marginTop: 2,
    },
})
