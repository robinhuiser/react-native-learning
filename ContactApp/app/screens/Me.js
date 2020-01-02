import React, { Component } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

import colors from '../config/colors'
import { Header, Actions, Info } from '../components/UserDetails';

import { me } from '../config/data';
import BasicButton from '../components/Buttons/BasicButton';

class Me extends React.Component {
    render() {

        return (
            <ScrollView style={{ backgroundColor: colors.background }}>
                <Header {...me} />
                <BasicButton 
                    label="Edit Profile" 
                    onPress={() => null}
                />
                <Actions {...me} />
                <Info {...me} />
            </ScrollView>
        )
    }
}

export default Me;