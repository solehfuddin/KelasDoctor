import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { FireConfig } from '../../config';
import { MyFonts } from '../../utils';
import { MyColors } from '../../utils/MyColors';

const splash = ({ navigation }) => {
    useEffect(() => {
        const unsubscribe =  FireConfig.auth().onAuthStateChanged(result => {
            setTimeout(() => {
                if (result) {
                    //Masih ada sesi login (default firebase 1 jam)
                    console.log('Session : ', result);
                    navigation.replace('MainApp');
                }
                else {
                    //Tidak ada sesi
                    navigation.replace('GetStarted');
                }
            },  3000);
        });

        return () => unsubscribe();
    }, [navigation]);
    return (
        <View style={styles.pages}>
            <ILLogo />
            <Text style={styles.widget}>My Doctor</Text>
        </View>
    )
}

export default splash

const styles = StyleSheet.create({
    pages: {
        backgroundColor: MyColors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    widget: {
        fontSize: 20,
        fontFamily: MyFonts.primary[600],
        color: MyColors.text.primary,
        marginTop: 20
    }
})
