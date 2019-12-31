# ContactApp - section 3

My notes creating my ContactApp application - based upon previous sections.

## React navigation

Community contributed for [navigation](https://reactnavigation.org/), from best practices building apps.

~~~bash
# Install from within project dir
$ npm install --save react-navigation
~~~

To complete the linking on iOS, run:

~~~bash
cd ios
pod install
cd ..
~~~

To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in `android/app/build.gradle`:

~~~gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
~~~

## Stack navigator

Basic usage:

~~~js
import { StackNavigator } from 'react-navigation';

export const DemoStack = StackNavigator({
    FirstScreen: {
        screen: FirstScreen,
        navigationOption: {
            // title: 'First screen'
            title: ({ state }) => state.params.firstName,
            header: (props) => ({
                left: <Button />,
            })
        }
    },
    SecondScreen: {
        screen: SecondScreen,

    }
});
~~~

## Exercise: defining a StackNavigator

~~~bash
# Install from within project dir
$ npm install --save react-navigation-stack
$ npm install --save react-native-gesture-handler

# Rebuild pod
$ cd ios && pod install && cd ..
~~~

... and stop Packager, restart all emulators, etc...

I could not get the app to work with the course provided solution, so I modified:

`./app/config/router.js`:

~~~js
export const ContactsStack = createStackNavigator({
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts',
      }
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: 'Details',
      }
    },
  });
~~~

`./app/index.js`:

~~~js
import React from 'react';
import { createAppContainer } from 'react-navigation';

import { ContactsStack } from './config/router';

export default createAppContainer(ContactsStack);
~~~
