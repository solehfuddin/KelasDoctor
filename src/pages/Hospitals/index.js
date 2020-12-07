import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets'
import ListHospital from '../../components/molekules/ListHospital'
import { MyFonts, MyColors } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.bg}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital
                    picture={DummyHospital1}
                    type='Rumah Sakit'
                    title='Citra Bunga Merdeka'
                    address='JL Surya sejahtera 20'
                />
                <ListHospital
                    picture={DummyHospital2}
                    type='Rumah Sakit Anak'
                    title='Happy family & kids'
                    address='JL Surya sejahtera 20' />
                <ListHospital
                    picture={DummyHospital3}
                    type='Rumah Sakit Jiwa'
                    title='Tingkatan paling atas'
                    address='JL Surya sejahtera 20' />
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.secondary,
        flex: 1,
    },
    bg: {
        height: 240,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.white,
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        fontFamily: MyFonts.primary[300],
        color: MyColors.white,
        marginTop: 6,
        textAlign: 'center',
    },
    content: {
        backgroundColor: MyColors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14,
    },
})
