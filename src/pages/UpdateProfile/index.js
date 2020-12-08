import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CustomButton, GapSpace, HeaderNav, Profile, TextInputCustom } from '../../components'
import { getData, MyColors, storeData } from '../../utils'
import { FireConfig } from '../../config'
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-picker'
import { ILNullPhoto } from '../../assets'

const UpdateProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullname: '',
        pekerjaan: '',
        email: '',
    });
    const [password, setPassword] = useState('');
    const [photoFire, setPhotoFire] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [isChangePhoto, setChangePhoto] = useState(false);

    useEffect(() => {
        getData('user').then(result => {
            console.log('Async Update profile : ', result);
            const data = result;
            if (result?.photo?.length > 1) {
                data.photo = { uri: result.photo };
            }
            else {
                ILNullPhoto
            };

            setPhoto(data.photo);
            setProfile(data);
        });
    }, []);

    const changeText = (key, value) => {
        setProfile({
            ...profile, [key]: value,
        });
    }

    const actionUpdate = () => {
        console.log('Update form : ', profile);

        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: 'Uppss sometheing was wrong',
                    description: 'Your new password less than 6 characters',
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                    type: 'default',
                });
            }
            else {
                updateNewPassword();
                updateProfileData();
            }
        }
        else {
            updateProfileData();
        }
    }

    const updateNewPassword = () => {
        FireConfig.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(error => {
                    showMessage({
                        message: 'Uppss sometheing was wrong',
                        description: error.message,
                        backgroundColor: MyColors.error,
                        color: MyColors.white,
                        type: 'default',
                    });
                });
            }
        });
    }

    const updateProfileData = () => {
        const data = profile;
        if (isChangePhoto) {
            if (photoFire?.length > 0) {
                data.photo = photoFire;
            }
        }
        else {
            if (photo != ILNullPhoto) {
                const img = photo.uri;
                data.photo = img;
            }
            else {
                data.photo = '';
            }
        }
        FireConfig.database().ref(`users/${profile.uid}/`).update(data)
            .then(() => {
                console.log('Update success : ', data);

                storeData('user', data)
                    .then(() => {
                        navigation.replace('MainApp');
                    })
                    .catch(() => {
                        showMessage({
                            message: "Uppss.. something wrong",
                            description: "Error when saving local data",
                            backgroundColor: MyColors.error,
                            console: MyColors.white,
                            type: 'default',
                        });
                    });
            })
            .catch(error => {
                showMessage({
                    message: "Uppss.. something wrong",
                    description: error.message,
                    backgroundColor: MyColors.error,
                    console: MyColors.white,
                    type: 'default',
                });
            });
    }

    const choosePhoto = () => {
        ImagePicker.launchCamera({ quality: 0.5, maxWidth: 200, maxHeight: 200 }, response => {
            console.log("Response : ", response);
            if (response.didCancel) {
                setChangePhoto(false);
                showMessage({
                    message: "Has an error occured",
                    description: "Please make sure you have choose an image",
                    type: "success",
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                });
            }
            else if (response.error) {
                setChangePhoto(false);
                showMessage({
                    message: "Has an error occured",
                    description: response.error,
                    type: "success",
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                });
            }
            else {
                const source = { uri: response.uri };
                setPhoto(source);
                console.log('Response : ', response);
                setPhotoFire(`data:${response.type};base64, ${response.data}`);
                setChangePhoto(true);
            }
        });
    }

    return (
        <View style={styles.page}>
            <HeaderNav title='Edit Profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={choosePhoto} />
                    <GapSpace gapHeight={6} />
                    <TextInputCustom label='Nama lengkap'
                        value={profile.fullname}
                        onChangeText={(value) => changeText('fullname', value)} />
                    <GapSpace gapHeight={24} />
                    <TextInputCustom label='Pekerjaan'
                        value={profile.pekerjaan}
                        onChangeText={(value) => changeText('pekerjaan', value)} />
                    <GapSpace gapHeight={24} />
                    <TextInputCustom label='Email'
                        value={profile.email}
                        disable />
                    <GapSpace gapHeight={24} />
                    <TextInputCustom label='Password'
                        value={password}
                        secureTextEntry
                        onChangeText={(value) => setPassword(value)} />
                    <GapSpace gapHeight={40} />
                    <CustomButton title='Update' onPress={actionUpdate} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    },
})
