import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderNav, LoadingInfo } from '../../components/molekules/'
import { CustomButton, GapSpace, TextInputCustom } from '../../components/atoms'
import { MyColors } from '../../utils/MyColors'
import { ScrollView } from 'react-native-gesture-handler'
import { FireConfig } from '../../config'
import { getData, MyUseForm, storeData } from '../../utils'
import { showMessage } from "react-native-flash-message"

const Register = ({ navigation }) => {
    const [form, setForm] = MyUseForm(
        {
            fullname: '',
            pekerjaan: '',
            email: '',
            password: '',
            photo: '',
        }
    );

    const [loader, setLoader] = useState(false);

    const onContinue = () => {
        console.log('Menekan fungsi onContinue');
        setLoader(true);

        FireConfig.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoader(false);
                setForm('reset');
                const user = {
                    fullname: form.fullname,
                    email: form.email,
                    pekerjaan: form.pekerjaan,
                    uid: success.user.uid,
                    photo: form.photo,
                };

                //Api storage
                FireConfig.database()
                    .ref('users/' + success.user.uid + '/')
                    .set(user);

                //Lokal storage
                storeData('user', user);

                navigation.navigate('UploadPhoto', user);
                console.log('Register success : ', success);
            })
            .catch((error) => {
                setLoader(false);
                const errorCode = error.code;
                const errorMsg = error.message;

                showMessage({
                    message: errorCode,
                    description: errorMsg,
                    type: "success",
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                });

                console.log(error);
            });

        console.log(form);
    }

    return (
        <>
            <View style={styles.page}>
                <HeaderNav onPress={() => navigation.goBack()} title='Daftarkan Akun' />
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TextInputCustom
                            label='Fullname'
                            value={form.fullname}
                            onChangeText={(value) => setForm('fullname', value)}
                        />
                        <GapSpace gapHeight={24} />
                        <TextInputCustom
                            label='Pekerjaan'
                            value={form.pekerjaan}
                            onChangeText={(value) => setForm('pekerjaan', value)}
                        />
                        <GapSpace gapHeight={24} />
                        <TextInputCustom
                            label='Email'
                            value={form.email}
                            onChangeText={(value) => setForm('email', value)}
                        />
                        <GapSpace gapHeight={24} />
                        <TextInputCustom
                            label='Password'
                            value={form.password}
                            onChangeText={(value) => setForm('password', value)}
                            secureTextEntry
                        />
                        <GapSpace gapHeight={40} />
                        <CustomButton title='Continue' onPress={onContinue} />
                    </ScrollView>
                </View>
            </View>

            { loader && <LoadingInfo />}
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    },
});
