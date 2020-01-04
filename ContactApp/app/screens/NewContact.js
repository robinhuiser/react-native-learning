import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import { CustomTextInput } from '../components/TextInput';
import { BasicButton } from '../components/Buttons';

const fields = [
    { placeholder: 'First Name', stateKey: 'firstName' },
    { placeholder: 'Last Name', stateKey: 'lastName' },
    { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address' },
    { placeholder: 'Mobile Phone', stateKey: 'mobilePhone' },
    { placeholder: 'Home Phone', stateKey: 'homePhone' },
    { placeholder: 'City', stateKey: 'city' },
    { placeholder: 'Birthday', stateKey: 'birthday' },
    { placeholder: 'Registered', stateKey: 'registered' },
    { placeholder: 'Username', stateKey: 'username' },
    { placeholder: 'Gender', stateKey: 'gender' },
];

class NewContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    onInputChange = (text, stateKey) => {
        const mod = {};
        mod[stateKey] = text;
        this.setState(mod);
    };

    handleSubmit = () => {
        alert('Contact was saved')
    };

    render() {
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
                {
                    fields.map((field) => (
                        <CustomTextInput
                            key={field.stateKey}
                            onChangeText={(text) => this.onInputChange(text, field.stateKey)}
                            {...field}
                        />
                    ))
                }
                <View style={{ marginTop: 20 }}>
                    <BasicButton
                        label="Submit"
                        onPress={() => this.handleSubmit() }
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    };
};

export default NewContact;