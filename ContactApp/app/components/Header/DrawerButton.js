import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { IMAGE_SIZE } from './styles';

const DrawerButton = ({ onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.drawerButtonContainer}
        >
            <Icon
                name="md-menu"
                size={IMAGE_SIZE}
            />
        </TouchableOpacity>
    );
};

export default DrawerButton;