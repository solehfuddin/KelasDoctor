import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton, GapSpace, HeaderNav, Profile, ProfileItem } from '../../components'
import { MyColors } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <HeaderNav title='Doctor Profile' onPress={() => navigation.goBack()}/>
            <Profile name='Nairoby Putri Hayza' desc='Dokter Anak' />
            <GapSpace gapHeight={10} />
            <ProfileItem
                label='Alumnus'
                value='Universitas Indonesia, 2020'
            />
            <ProfileItem
                label='Tempat Praktek'
                value='Rumah Sakit Umum Bandung'
            />
            <ProfileItem
                label='No STR'
                value='0000116622081996'
            />
            <View style={styles.action}>
                <CustomButton title='Start Consultation' onPress={() => navigation.navigate('Chatting')}/>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.white,
        flex: 1,
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23,
    },
})
