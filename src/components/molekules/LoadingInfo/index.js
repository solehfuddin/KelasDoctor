import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { MyColors, MyFonts } from '../../../utils'

const LoadingInfo = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={MyColors.primary}/>
            <Text style={styles.title}>Loading ...</Text>
        </View>
    )
}

export default LoadingInfo

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MyColors.loadingBg,
        width: '100%',
        height: '100%',
    },
    title:{
        fontSize: 18,
        color: MyColors.primary,
        fontFamily: MyFonts.primary[600],
        marginTop: 16,
        textAlign: 'center',
    },
})
