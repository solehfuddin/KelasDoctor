import React from 'react'
import { StyleSheet, Text, TouchableOpacityComponent, View } from 'react-native'
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({type, title, onPress}) => {
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
            backgroundColor:type === 'Secondary' ? 'white' : '#0BCAD4',
            padding:10,
            borderRadius: 10
        }
    ),
    text:(type) => (
        {
            fontSize: 18,
            // fontWeight:'600',
            fontFamily:'Nunito-SemiBold',
            textAlign:'center',
            color:type === 'Secondary' ? '#112340' : 'white',
        }
    ),
})
