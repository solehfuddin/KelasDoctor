import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'

const List = ({ imgProfile, name, message, type, icon, onPress }) => {
    const Icon = () => {
        if (icon === 'edit-profile'){
            return <IconEditProfile />
        }
        if (icon === 'language'){
            return <IconLanguage />
        }
        if (icon === 'rate'){
            return <IconRate />
        }

        return <IconHelp/>
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> : <Image source={imgProfile} style={styles.avatar} />}
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{message}</Text>
            </View>
            {type === 'next' && <IconNext />}
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        marginLeft: 16,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    name: {
        fontSize: 16,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.primary,
    },
    desc: {
        fontSize: 12,
        fontFamily: MyFonts.primary[300],
        color: MyColors.text.primary,
    },
})
