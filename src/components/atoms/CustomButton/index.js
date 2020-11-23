import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomButton = ({type, title}) => {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text(type)}>{title}</Text>
        </View>
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
            fontSize: 16,
            fontWeight:'600',
            textAlign:'center',
            color:type === 'Secondary' ? '#112340' : 'white',
        }
    ),
})
