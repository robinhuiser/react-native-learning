import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string'
import Row from './Row';

const Info = ({ location, dob, registered, login }) => {

    return (
        <View style={styles.infoContainer}>
        <Row
          label="city"
          body={location.city.capitalizeFirstLetter()}
        />
        <Row
          label="birthday"
          body={moment(dob).format('MMMM Do, YYYY')}
        />
        <Row
          label="registered"
          body={moment(registered).format('MMMM Do, YYYY')}
        />
        <Row
          label="login"
          body={login.username}
        />
      </View>
    );
};

export default Info;