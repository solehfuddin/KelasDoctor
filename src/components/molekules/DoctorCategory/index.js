import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ILCekObat, ILCekPsikiater, ILCekUmum } from '../../../assets'
import { MyColors, MyFonts } from '../../../utils'

const DoctorCategory = ({ category, onPress }) => {
    const Icon = () => {
        if (category === 'Psikiater') {
            return <ILCekPsikiater style={styles.icon} />
        }
        if (category === 'Dokter Obat') {
            return <ILCekObat style={styles.icon} />
        }
        return <ILCekUmum style={styles.icon} />
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: MyColors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 110,
        height: 130,
    },
    icon: {
        marginBottom: 28,
    },
    label: {
        fontSize: 12,
        fontFamily: MyFonts.primary[300],
        color: MyColors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
    },
})
