import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets'
import {TextInputCustom, TextLinkCustom, CustomButton, GapSpace} from '../../components'
import { MyFonts } from '../../utils'
import { MyColors } from '../../utils/MyColors'

const SignIn = () => {
    return (
        <View style={styles.page}>
            <ILLogo/>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <TextInputCustom label='Email address' />
            <GapSpace gapHeight={24}/>
            <TextInputCustom label='Password'/>
            <GapSpace gapHeight={10}/>
            <TextLinkCustom title='Forgot my password' size={12}/>
            <GapSpace gapHeight={40}/>
            <CustomButton title='Sign In'/>
            <GapSpace gapHeight={30}/>
            <TextLinkCustom title='Create new account' size={16} alignText='center'/>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page : {
        padding: 40,
        backgroundColor: MyColors.white,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 155
    },
})
