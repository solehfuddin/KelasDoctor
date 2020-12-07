import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MyColors, MyFonts } from '../../../utils'

const ListHospital = ({picture, type, title, address}) => {
    return (
        <View style={styles.container}>
            <Image source={picture} style={styles.picture} />
            <View style={styles.detail}>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.border,
    },
    detail: {
        justifyContent: 'center',
    },
    picture: {
        width: 85,
        height: 75,
        borderRadius: 11,
        marginRight: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.primary,
    },
    address: {
        fontSize: 12,
        fontFamily: MyFonts.primary[300],
        color: MyColors.text.secondary,
        marginTop: 6,
    },
})
