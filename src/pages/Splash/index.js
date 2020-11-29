import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { MyFonts } from '../../utils';
import { MyColors } from '../../utils/MyColors';

const splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000);
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
