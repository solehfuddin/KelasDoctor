import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { CustomButton } from '../../components'
import GapSpace from '../../components/atoms/GapSpace'

const GetStarted = () => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.pages}>
            <View>
                <ILLogo />
                <Text style={styles.heading}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>

            <View>
                <CustomButton title='Get Started'/>
                <GapSpace gapHeight={16}/>
                <CustomButton type='Secondary' title='Sign In'/>
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
        // fontWeight:'600',
        fontFamily:'Nunito-SemiBold',
        color:'white',
        marginTop:91
    }
})
