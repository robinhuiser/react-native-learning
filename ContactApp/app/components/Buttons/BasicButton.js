import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const BasicButton = ({ label, onPress }) => {
    return(
        <View style={styles.basicButtonContainer}>
            <TouchableOpacity
                onPress={() => onPress()}
                style={styles.basicButton}
            >
                <Text style={styles.basicButtonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasicButton;