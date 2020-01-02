import React from 'react';
import { Platform } from 'react-native';

import { Tabs, Drawer } from './config/router';

const App = () => {

    // For iOS we prefer to use tabs
    if (Platform.OS === 'ios' ) {
        return <Tabs />;
    }

    // For Android we like drawers
    return <Drawer />; 
};

export default App;