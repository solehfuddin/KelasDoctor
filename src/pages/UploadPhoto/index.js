import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { CustomButton, GapSpace, HeaderNav, TextLinkCustom } from '../../components'
import { MyColors, MyFonts, storeData } from '../../utils'
import ImagePicker from 'react-native-image-picker'
import { showMessage } from "react-native-flash-message"
import { FireConfig } from '../../config'

const UploadPhoto = ({ navigation, route }) => {
    const { fullname, pekerjaan, uid } = route.params;
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photoFire, setPhotoFire] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);

    const chooseImage = () => {
        console.log("Function Choose Image");

        ImagePicker.launchCamera({ quality: 0.5, maxWidth: 200, maxHeight: 200 }, response => {
            if (response.didCancel) {
                showMessage({
                    message: "Has an error occured",
                    description: "Please make sure you have choose an image",
                    type: "success",
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                });
            }
            else if (response.error) {
                showMessage({
                    message: "Has an error occured",
                    description: response.error,
                    type: "success",
                    backgroundColor: MyColors.error,
                    color: MyColors.white,
                });
            }
            else {
                console.log('Image Selected Response : ', response);
                const source = { uri: response.uri };

                setPhotoFire(`data:${response.type};base64, ${response.data}`);
                setPhoto(source);
                setHasPhoto(true);
            }
        });
    };

    const actionUploadContinue = () => {
        console.log('Function Action Upload');
        FireConfig.database().ref('users/' + uid + '/').update({ photo: photoFire });

        const dataUser = route.params;
        dataUser.photo = photoFire;
        storeData('user', dataUser);

        navigation.replace('MainApp');
    };

    const skipUpload = () => {
        console.log('Function Skip');
        const dataUser = route.params;
        dataUser.photo = photo;

        storeData('user', dataUser);
        navigation.replace('MainApp');
    };

    return (
        <View style={styles.page}>
            <HeaderNav title='Upload Photo' onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={chooseImage}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.avatarIcon} />}
                        {!hasPhoto && <IconAddPhoto style={styles.avatarIcon} />}
                    </TouchableOpacity>
                    <GapSpace gapHeight={5} />
                    <Text style={styles.profileName}>{fullname}</Text>
                    <GapSpace gapHeight={3} />
                    <Text style={styles.profileJob}>{pekerjaan}</Text>
                </View>

                <View>
                    <CustomButton
                        disable={!hasPhoto}
                        title='Upload and Continue'
                        onPress={actionUploadContinue} />
                    <GapSpace gapHeight={30} />
                    <TextLinkCustom title='Skip for this'
                        size={16} alignText='center'
                        onPress={skipUpload} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: MyColors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: MyColors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarIcon: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    profileName: {
        fontSize: 24,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        textAlign: 'center',
    },
    profileJob: {
        fontSize: 18,
        fontFamily: MyFonts.primary.normal,
        color: MyColors.text.secondary,
        textAlign: 'center'
    },
})
