import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IconSendDark, IconSendLight} from '../../../assets'
import { MyColors } from '../../../utils'

const IconButtonSend = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <IconSendDark />}
            {!disable && <IconSendLight />}
        </View>
    )
}

export default IconButtonSend

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? MyColors.disable : MyColors.tertiary,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8,
    }),
})
