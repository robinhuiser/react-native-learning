import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import colors from '../config/colors'
import { Header, Actions, Info } from '../components/UserDetails';

class Details extends React.Component {
    render() {
        const contact  = this.props.navigation.state.params;

        return (
            <ScrollView style={{ backgroundColor: colors.background }}>
                <Header {...contact} />
                <Actions {...contact} />
                <Info {...contact} />
          </ScrollView>
        )
    }
}

export default Details;