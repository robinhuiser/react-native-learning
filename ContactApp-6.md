# ContactApp - section 6

My notes creating my ContactApp application - based upon previous sections.

## Drawer Navigator

Basic usage:

~~~js
import  { DrawerNavigator } from 'react-navigator';

export const Drawer = DrawerNavigator ({
  Item1: {
    screen: Item1Screen,
    navigationOptions: {
      drawerLabel: 'Item1 label;,
      drawerIcon: ({ tintColor }) => <Icon name="ios-list" color={tintColor} />
    },
  },
  Item2: {
    screen: Item2Screen,
  },
});

this.props.navigation.navigate('DrawerOpen');
this.props.navigation.navigate('DrawerClose');
~~~

## Exercise: Create and Use a DrawerNavigator

First, let's install the component and native setup:

~~~bash
# Install from within project dir
$ npm install --save react-navigation-drawer
~~~

Similar to the previous exercise, I created a drawer using the updated API specs:

`./app/config/router.js`

~~~js
// Import the lib
import { createDrawerNavigator } from 'react-navigation-drawer';

...
export const Drawer = createAppContainer(
  createDrawerNavigator(
    {
      Contacts: {
        screen: ContactsStack,
        navigationOptions: {
          drawerLabel: 'Contacts',
          drawerIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={35} color={tintColor} />
        }
      },
      NewContact: {
        screen: NewContactStack,
        navigationOptions: {
          drawerLabel: 'New Contact',
          drawerIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} size={35} color={tintColor} />
        }
      },
      Me: {
        screen: MeStack,
        navigationOptions: {
          drawerLabel: 'Me',
          drawerIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} size={35} color={tintColor} />
        }
      },
    }
  )
);
~~~

...and than updated `./app/index.js` to hide the tab navigator and use the drawer navigator instead: 

~~~js
import { Tabs, Drawer } from './config/router';

export default Drawer;
~~~

This works for iOS... but not for Android!!!

### Solution: implement some native code

As per Medium article [Swipe to Toggle Drawer in React Native](https://medium.com/@shreyasnisal/swipe-to-toggle-drawer-in-react-native-66f01d5dc3df):

> If you implement a drawer navigator in React Native, you might notice that by default the drawer often doesn’t open when you swipe the screen in the necessary direction, at least on Android. This is because of some issues with the react-native-gesture-handler. The solution to this problem is actually quite simple, although it involves writing native code.

Open the `MainActivity.java` file located in `./android/app/src/main/java/YOUR-PACKAGE-NAME` and add the following import statements to it:

~~~java
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
~~~

Having added these import statements, now add method below in the `MainActivity` class:

~~~java
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
          @Override
          protected ReactRootView createRootView() {
              return new RNGestureHandlerEnabledRootView(MainActivity.this);
          }
      };
  }
~~~

Last, redeploy the app:

~~~bash
$ npx react-native run-android
~~~

That’s it! Your drawer should now open and close when you swipe on the screen in the correct directions.

## Text button in the header

Again... API changed, hence I modified the following (only showing for a single stack):

~~~js
// Import DrawerActions since "DrawerOpen" is no longer supported
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

// Use the new function navigation.dispatch!
export const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: ({ navigation }) => ({
      title: 'Contacts',
      headerLeft: <Button title="Open" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />,
    }),
  },
...
~~~

