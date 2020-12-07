import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { TextInputCustom, TextLinkCustom, CustomButton, GapSpace, LoadingInfo } from '../../components'
import { MyFonts, MyUseForm, storeData } from '../../utils'
import { MyColors } from '../../utils/MyColors'
import { FireConfig } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = ({ navigation }) => {
    const [form, setForm] = MyUseForm({ email: '', password: '' });
    const [loader, setLoader] = useState(false);

    const actionLogin = () => {
        console.log('Form Data : ', form);
        setLoader(true);

        FireConfig.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(result => {
                console.log('Response success : ', result);
            
                FireConfig.database().ref(`users/${result.user.uid}/`).once('value')
                    .then(resultVal => {
                        console.log('Data user : ', resultVal.val());
                        // storeData('user', '');
                        if (resultVal.val()) {
                            storeData('user', resultVal.val())
                                .then(() => {
                                    setLoader(false);
                                    navigation.replace('MainApp');
                                    setForm('reset');
                                })
                                .catch(() => {
                                    setLoader(false);
                                    showMessage({
                                        message: "Uppss.. something wrong",
                                        description: "Please check your connection",
                                        backgroundColor: MyColors.error,
                                        console: MyColors.white,
                                        type: 'default',
                                    });
                                });
                        }
                    });
            })
            .catch(error => {
                console.log('Response failure : ', error);
                setLoader(false);
                showMessage({
                    message: 'Login Failure',
                    description: error.message,
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                    type: 'default',
                });
            });
    }

    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <GapSpace gapHeight={40} />
                    <ILLogo />
                    <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                    <TextInputCustom label='Email address'
                        value={form.email}
                        onChangeText={value => setForm('email', value)} />
                    <GapSpace gapHeight={24} />
                    <TextInputCustom label='Password'
                        value={form.password}
                        onChangeText={value => setForm('password', value)}
                        secureTextEntry />
                    <GapSpace gapHeight={10} />
                    <TextLinkCustom title='Forgot my password' size={12} />
                    <GapSpace gapHeight={40} />
                    <CustomButton title='Sign In' onPress={actionLogin} />
                    <GapSpace gapHeight={30} />
                    <TextLinkCustom title='Create new account' size={16} alignText='center' onPress={() => navigation.navigate('Register')} />
                </ScrollView>
            </View>
            {loader && <LoadingInfo />}
        </>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40,
        backgroundColor: MyColors.white,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 155
    },
})
