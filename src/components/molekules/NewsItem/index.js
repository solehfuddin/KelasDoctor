import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyNews1, DummyNews2, DummyNews3 } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'

const NewsItem = ({ id, title, date }) => {
    const Img = () => {
        if (id == '2') {
            return <Image source={DummyNews2} style={styles.image} />
        }
        if (id == '3') {
            return <Image source={DummyNews3} style={styles.image} />
        }
        return <Image source={DummyNews1} style={styles.image} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Img />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: MyColors.border,
        paddingBottom: 12,
        paddingTop: 6,
        paddingHorizontal: 16,
    },
    titleWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        maxWidth: '90%',
    },
    date: {
        fontSize: 12,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        marginTop: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 11,
    },
})
