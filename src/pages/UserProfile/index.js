import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { HeaderNav, Profile, List, GapSpace } from '../../components'
import { getData, MyColors } from '../../utils'
import {FireConfig} from '../../config'
import { showMessage } from 'react-native-flash-message'

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullname: 'Nama user',
        pekerjaan: 'Pekerjaan',
        photo: ILNullPhoto,
    });

    useEffect(() => {
        getData('user').then(result => {
            console.log('Async User profile', result);
            const data = result;
            if (result?.photo?.length > 1) {
                data.photo =  {uri: result.photo};
            }
            else {
                ILNullPhoto
            };
            // data.photo = {uri: result.photo};

            setProfile(data);
        });
    }, []);

    const signOut = () => {
        FireConfig.auth().signOut().then(() => {
            console.log('Signout success');
            navigation.replace('GetStarted');
        })
        .catch(error => {
            showMessage({
                message: 'Uppss something wrong',
                description: error.message,
                backgroundColor: MyColors.error,
                color: MyColors.white,
                type: 'default'
            });
        });
    };
    return (
        <View style={styles.page}>
            <HeaderNav title='Profile' onPress={() => navigation.goBack()}/>
            <GapSpace gapHeight={15} />
            <Profile name={profile.fullname} desc={profile.pekerjaan} photo={profile.photo}/>
            <GapSpace gapHeight={14} />
            <List
                name='Edit profile'
                message='Last update yesterday'
                type='next'
                icon='user-profile'
                onPress={() => navigation.navigate('UpdateProfile')} />
            <List
                name='Language'
                message='Last update yesterday'
                type='next'
                icon='language' />
            <List
                name='Rating'
                message='Last update yesterday'
                type='next'
                icon='rate' />
            <List
                name='Sign Out'
                message='Last update yesterday'
                type='next'
                icon='help'
                onPress={signOut} />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.white,
    },
})
