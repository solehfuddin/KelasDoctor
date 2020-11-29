import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { CustomButton, GapSpace, HeaderNav, TextLinkCustom } from '../../components'
import { MyColors, MyFonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.page}>
            <HeaderNav title='Upload Photo' onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.avatarIcon} />
                    </View>
                    <GapSpace gapHeight={5} />
                    <Text style={styles.profileName}>Muhamad Solehfuddin</Text>
                    <GapSpace gapHeight={3} />
                    <Text style={styles.profileJob}>Mobile Programmer</Text>
                </View>

                <View>
                    <CustomButton title='Upload and Continue' />
                    <GapSpace gapHeight={30} /> 
                    <TextLinkCustom title='Skip for this' size={16} alignText='center' />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: MyColors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        flex : 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: MyColors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarIcon: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    profileName: {
        fontSize: 24,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        textAlign: 'center',
    },
    profileJob: {
        fontSize: 18,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        textAlign: 'center'
    },
})
