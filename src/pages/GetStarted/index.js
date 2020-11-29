import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { CustomButton } from '../../components'
import GapSpace from '../../components/atoms/GapSpace'
import { MyFonts } from '../../utils'
import { MyColors } from '../../utils/MyColors'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.pages}>
            <View>
                <ILLogo />
                <Text style={styles.heading}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>

            <View>
                <CustomButton title='Get Started' onPress={() => navigation.navigate('Register')}/>
                <GapSpace gapHeight={16}/>
                <CustomButton type='Secondary' title='Sign In' onPress={() => navigation.navigate('SignIn')}/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    pages: {
        padding: 40,
        flex: 1,
        justifyContent: 'space-between',
    },
    heading: {
        fontSize:28,
        fontFamily: MyFonts.primary[600],
        color:MyColors.white,
        marginTop:91
    }
})
