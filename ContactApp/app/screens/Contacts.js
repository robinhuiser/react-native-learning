import React, { Component, PropTypes } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

import '../helpers/string'

class Contacts extends React.Component {
    handleRowPress = (item) => {
        this.props.navigation.navigate('Details',  item);
    };

    render() {
        return (
            <FlatList
                style={{ backgroundColor: colors.background }}
                data={contacts}
                renderItem={({ item }) =>
                    <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
                }
                keyExtractor={(item) => item.email}
            />
        );
    }
}

export default Contacts;