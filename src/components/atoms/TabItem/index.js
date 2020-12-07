import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    IconDoctor,
    IconMessage,
    IconHospital,
    IconMessageActive,
    IconHospitalActive,
    IconDoctorActive
} from '../../../assets/icon';
import { MyColors, MyFonts } from '../../../utils';

const TabItem = ({ title, isActive, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Messages') {
            return isActive ? <IconMessageActive /> : <IconMessage />
        }
        if (title === 'Hospitals') {
            return isActive ? <IconHospitalActive /> : <IconHospital />
        }

        return isActive ? <IconDoctorActive /> : <IconDoctor />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(isActive)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isActive) => (
        {
            fontSize: 10,
            color: isActive
                ? MyColors.text.menuActive
                : MyColors.text.menuInactive,
            fontFamily: MyFonts.primary[600],
            marginTop: 4,
        }
    ),
})
