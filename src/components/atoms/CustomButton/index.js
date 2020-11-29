import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MyFonts } from '../../../utils'
import { MyColors } from '../../../utils/MyColors'

const CustomButton = ({ type, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: (type) => (
        {
            backgroundColor: type === 'Secondary'
                ? MyColors.button.secondary.background
                : MyColors.button.primary.background,
            padding: 10,
            borderRadius: 10
        }
    ),
    text: (type) => (
        {
            fontSize: 18,
            fontFamily: MyFonts.primary[600],
            textAlign: 'center',
            color: type === 'Secondary'
                ? MyColors.button.secondary.text
                : MyColors.button.primary.text,
        }
    ),
})
