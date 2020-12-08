import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILNullPhoto, JsonCategoryDoctor, JsonNewsDoctor, JsonRatedDoctor } from '../../assets'
import { DoctorCategory, GapSpace, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { MyColors, MyFonts, getData, storeData } from '../../utils'

const Doctor = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullname: 'User',
        pekerjaan: 'Pekerjaan',
        photo: ILNullPhoto,
    });

    useEffect(() => {
        getData('user').then(result => {
            console.log('Async Home Profile : ', result);
            result.photo = result?.photo?.length > 1 ? { uri: result.photo } : ILNullPhoto;

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

    const openUserProfile = () => {
        navigation.navigate('UserProfile', profile);
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <GapSpace gapHeight={30} />
                        <HomeProfile
                            photo={profile.photo}
                            fullname={profile.fullname}
                            pekerjaan={profile.pekerjaan}
                            onPress={openUserProfile} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <GapSpace gapWidth={32} />
                                {
                                    JsonCategoryDoctor.data.map(item => {
                                        return <DoctorCategory
                                            key={item.id}
                                            category={item.category}
                                            onPress={() => navigation.navigate('ChatDoctor')} />
                                    })
                                }
                                <GapSpace gapWidth={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        {
                            JsonRatedDoctor.data.map(item => {
                                return <RatedDoctor
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    level={item.level}
                                    rating={item.rating}
                                    onPress={() => navigation.navigate('DoctorProfile')} />
                            })
                        }
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    {
                        JsonNewsDoctor.data.map(item => {
                            return <NewsItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                date={item.date} />
                        })
                    }
                    <GapSpace gapHeight={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: MyColors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: MyColors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    welcome: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 212,
    },
    category: {
        flexDirection: 'row',
    },
    wrapperScroll: {
        marginHorizontal: -16,
    },
    wrapperSection: {
        paddingHorizontal: 16,
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    },
})
