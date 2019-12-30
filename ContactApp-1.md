# ContactApp - section 1

My notes creating my ContactApp application.

## Setup of the base project

~~~bash
# Create Contact App
$ npx react-native init ContactApp

# Verify emulator works (iOS)
$ cd ./ContactApp && npx react-native run-ios

# Setup directory structure
$ for dir in components config helpers screens; do
   mkdir -p app/$dir
   touch app/$dir/.gitkeep
done
~~~

## Create the basic screens

Create `./app/screens/Contacts.js`:

~~~js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Contacts extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Contacts Screen</Text>
            </View>
        )
    }
}

export default Contacts;
~~~

Do the same for `Details`, `Me` and `NewContact` replacing the names for the class, the screen and the export.

Create a new file `app/index.js`with following the content:

~~~js
import React from 'react';
import Component from './screens/Contacts';

const App = () => {
  return <Component />;
};

export default App;
~~~

Update the `./index.js` to point to our new application entry point:

~~~js
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
~~~

...now we see the contacts screen updated!
