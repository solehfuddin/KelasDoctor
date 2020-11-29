import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderNav } from '../../components/molekules/'
import { CustomButton, GapSpace, TextInputCustom } from '../../components/atoms'
import { MyColors } from '../../utils/MyColors'

const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
            <HeaderNav onPress={() => navigation.goBack()} title='Daftarkan Akun'/>
            <View style={styles.content}>
                <TextInputCustom label='Fullname' />
                <GapSpace gapHeight={24}/>
                <TextInputCustom label='Pekerjaan' />
                <GapSpace gapHeight={24}/>
                <TextInputCustom label='Email' />
                <GapSpace gapHeight={24}/>
                <TextInputCustom label='Password' />
                <GapSpace gapHeight={40}/>
                <CustomButton title='Continue' onPress={() => navigation.navigate('UploadPhoto')} />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.white,
        flex: 1,
    },  
    content : {
        padding: 40,
        paddingTop: 0,
    },
});
