import React from 'react'
import { Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../Config/Colors';

function CustomHeaderButton(props) {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primary}
        />
    )
}

export default CustomHeaderButton