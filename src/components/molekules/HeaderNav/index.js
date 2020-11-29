import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MyFonts } from '../../../utils'
import { MyColors } from '../../../utils/MyColors'
import { GapSpace, IconButton } from '../../atoms'

const HeaderNav = ({onPress, title}) => {
    return (
        <View style={styles.container}>
            <IconButton icon='back-dark' onPress={onPress}/>
            <Text style={styles.title}>{title}</Text>
            <GapSpace gapWidth={24}/>
        </View>
    )
}

export default HeaderNav

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 16,
        paddingVertical: 20,
        backgroundColor: MyColors.white,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title : {
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        flex: 1,
    }
})
