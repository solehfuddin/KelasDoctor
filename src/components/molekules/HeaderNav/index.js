import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MyFonts } from '../../../utils'
import { MyColors } from '../../../utils/MyColors'
import { GapSpace, IconButton } from '../../atoms'
import DarkProfile from './DarkProfile'

const HeaderNav = ({ onPress, title, type }) => {
    if (type === 'dark-profile') {
        return <DarkProfile onPress={onPress} />
    }
    return (
        <View style={styles.container(type)}>
            <IconButton icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
            <Text style={styles.title(type)}>{title}</Text>
            <GapSpace gapWidth={24} />
        </View>
    )
}

export default HeaderNav

const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal: 16,
            paddingVertical: 25,
            backgroundColor: type === 'dark' ? MyColors.secondary : MyColors.white,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomLeftRadius: type === 'dark' ? 10 : 0,
            borderBottomRightRadius: type === 'dark' ? 10 : 0,
        }
    ),
    title: (type) => (
        {
            textAlign: 'center',
            fontSize: 20,
            fontFamily: MyFonts.primary[600],
            color: type === 'dark' ? MyColors.white : MyColors.text.primary,
            flex: 1,
        }
    ),
})
