import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyDoctor2, DummyDoctor5, DummyDoctor8, IconStar } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'

const RatedDoctor = ({ id, name, level, rating, onPress }) => {
    const Rate = () => {
        if (rating == 1) {
            return <View style={styles.rate}>
                <IconStar />
            </View>
        }
        if (rating == 2) {
            return <View style={styles.rate}>
                <IconStar />
                <IconStar />
            </View>
        }
        if (rating == 3) {
            return <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        }
        if (rating == 4) {
            return <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        }

        return <View style={styles.rate}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
        </View>
    };

    const Img = () => {
        if (id == 2){
            return <Image source={DummyDoctor2} style={styles.avatar} />
        }
        if (id == 5){
            return <Image source={DummyDoctor5} style={styles.avatar} />
        }
        if (id == 8){
            return <Image source={DummyDoctor8} style={styles.avatar} />
        }

        return <Image source={DummyDoctor1} style={styles.avatar} />
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Img/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{level}</Text>
            </View>
            <Rate />
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    profile: {
        flex: 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        marginTop: 2,
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
