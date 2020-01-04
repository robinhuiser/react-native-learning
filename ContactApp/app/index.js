import React from 'react';
import { Platform } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { Tabs, Drawer } from './config/router';

const App = () => {

    // In real app, do init stuff and hide the splash after...
    SplashScreen.hide();

    // For iOS we prefer to use tabs
    if (Platform.OS === 'ios' ) {
        return <Tabs />;
    }

    // For Android we like drawers
    return <Drawer />; 
};

export default App;