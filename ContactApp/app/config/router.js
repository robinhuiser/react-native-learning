import React from 'react';
import { Platform } from 'react-native';

// Navigation stuff
import { createAppContainer, DrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

// Amazing Icon lib for both iOS and Android
import Icon from 'react-native-vector-icons/Ionicons';

// My screens
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

// Functions and components
import { capitalizeFirstLetter } from '../helpers/string'
import { DrawerButton } from '../components/Header';

// Will render null if platform is iOS
const AndroidDrawerButton = ({ navigation }) => {
  if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigation.dispatch(DrawerActions.openDrawer()) } />
  }
  return null;
}

// The stacks for the app
export const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: (props) => ({
      title: 'Contacts',
      headerLeft: <AndroidDrawerButton {...props} />,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.first.capitalizeFirstLetter() + " " +
        navigation.state.params.name.last.capitalizeFirstLetter(),
    }),
  },
});

export const NewContactStack = createStackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: (props) => ({
      title: 'New Contact',
      headerLeft: <AndroidDrawerButton {...props} />,
    }),
  },
});

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: (props) => ({
      title: 'Me',
      headerLeft: <AndroidDrawerButton {...props} />,
    }),
  },
});

// The tabs (for iOS)
export const Tabs = createAppContainer(
  createBottomTabNavigator(
    {
      Contacts: {
        screen: ContactsStack,
        navigationOptions: {
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ tintColor }) => <Icon name='ios-list' size={35} color={tintColor} />
        }
      },
      NewContact: {
        screen: NewContactStack,
        navigationOptions: {
          tabBarLabel: 'New Contact',
          tabBarIcon: ({ tintColor }) => <Icon name='ios-add' size={35} color={tintColor} />
        }
      },
      Me: {
        screen: MeStack,
        navigationOptions: {
          tabBarLabel: 'Me',
          tabBarIcon: ({ tintColor }) => <Icon name='ios-contact' size={35} color={tintColor} />
        }
      },
    }
  )
);

// The drawer (for Android)
export const Drawer = createAppContainer(
  createDrawerNavigator(
    {
      Contacts: {
        screen: ContactsStack,
        navigationOptions: {
          drawerLabel: 'Contacts',
          drawerIcon: ({ tintColor }) => <Icon name='md-list' size={25} color={tintColor} />
        }
      },
      NewContact: {
        screen: NewContactStack,
        navigationOptions: {
          drawerLabel: 'New Contact',
          drawerIcon: ({ tintColor }) => <Icon name='md-add' size={25} color={tintColor} />
        }
      },
      Me: {
        screen: MeStack,
        navigationOptions: {
          drawerLabel: 'Me',
          drawerIcon: ({ tintColor }) => <Icon name='md-contact' size={25} color={tintColor} />
        }
      },
    }
  )
);