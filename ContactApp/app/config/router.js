import React from 'react';
import { Platform, Button } from 'react-native';
import { createAppContainer, DrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { capitalizeFirstLetter } from '../helpers/string'

export const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: ({ navigation }) => ({
      title: 'Contacts',
      headerLeft: <Button title="Open" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />,
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
    navigationOptions: ({ navigation }) => ({
      title: 'New Contact',
      headerLeft: <Button title="Open" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />,
    }),
  },
});

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: ({ navigation }) => ({
      title: 'Me',
      headerLeft: <Button title="Open" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />,
    }),
  },
});

export const Tabs = createAppContainer(
  createBottomTabNavigator(
    {
      Contacts: {
        screen: ContactsStack,
        navigationOptions: {
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={35} color={tintColor} />
        }
      },
      NewContact: {
        screen: NewContactStack,
        navigationOptions: {
          tabBarLabel: 'New Contact',
          tabBarIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} size={35} color={tintColor} />
        }
      },
      Me: {
        screen: MeStack,
        navigationOptions: {
          tabBarLabel: 'Me',
          tabBarIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} size={35} color={tintColor} />
        }
      },
    }
  )
);

// Section 6: Drawer
export const Drawer = createAppContainer(
  createDrawerNavigator(
    {
      Contacts: {
        screen: ContactsStack,
        navigationOptions: {
          drawerLabel: 'Contacts',
          drawerIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={25} color={tintColor} />
        }
      },
      NewContact: {
        screen: NewContactStack,
        navigationOptions: {
          drawerLabel: 'New Contact',
          drawerIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} size={25} color={tintColor} />
        }
      },
      Me: {
        screen: MeStack,
        navigationOptions: {
          drawerLabel: 'Me',
          drawerIcon: ({ tintColor }) => <Icon name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} size={25} color={tintColor} />
        }
      },
    }
  )
);