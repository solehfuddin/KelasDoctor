import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {List} from '../../components'
import { MyColors, MyFonts } from '../../utils'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'

const Messages = ({navigation}) => {
    const [doctors] = useState([
        {
            id: 1,
            imgProfile: DummyDoctor4,
            name: 'Alexander Jannie',
            message: 'Baik ibu, terima kasih banyak atas wakt..',
        },
        {
            id: 2,
            imgProfile: DummyDoctor5,
            name: 'Nairobi Putri Haiza',
            message: 'Oh tentu saja tidak, karena jeruk itu..',
        },
        {
            id: 3,
            imgProfile: DummyDoctor6,
            name: 'John McParker Steve',
            message: 'Oke menurut pak dokter bagaimana ji..',
        },
    ]);

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctors.map(doctor => {
                        return (
                            <List
                                key={doctor.id}
                                imgProfile={doctor.imgProfile}
                                name={doctor.name}
                                message={doctor.message}
                                onPress={() => navigation.navigate('Chatting')}
                            />
                        );
                    })
                }
            </View>
        </View>
    )
}

export default Messages

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
    title: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },
})
