import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { getData, MyColors, MyFonts, storeData } from '../../../utils'

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        fullname: 'User',
        pekerjaan: 'Pekerjaan',
        photo: ILNullPhoto,
    });

    useEffect(() => {
        getData('user').then(result => {
            console.log('Async Home Profile : ', result);
            const img = result;
            img.photo = result?.photo?.length > 1 ? {uri: result.photo} : ILNullPhoto;
      
            // img.photo = {uri : result.photo};
            storeData('user', result)
            .catch(() => {
                showMessage({
                    message: "Uppss.. something wrong",
                    description: "Local storage couldn't save",
                    backgroundColor: MyColors.error,
                    console: MyColors.white,
                    type: 'default',
                });
            });
            setProfile(result);
        });
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image source={profile.photo} style={styles.avatar} />
            </TouchableOpacity>

            <View>
                <Text style={styles.name}>{profile.fullname}</Text>
                <Text style={styles.jobs}>{profile.pekerjaan}</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        textTransform: 'capitalize',
    },
    jobs: {
        fontSize: 12,
        fontFamily: MyFonts.primary[400],
        color: MyColors.text.secondary,
        textTransform: 'capitalize',
    },
})
