import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IconBackDark} from '../../../assets'

const IconButton = ({icon, onPress}) => {
    const Icon = () => {
        if (icon === 'back-dark')
        {
            return <IconBackDark />
        }
        if (icon === 'back-light')
        {
            return <IconBackDark />
        }
        return <IconBackDark />
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconButton
