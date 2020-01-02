# ContactApp - section 5

My notes creating my ContactApp application - based upon previous sections.

## Tab Navigator

Differences between iOS and Androis explained - all handled by React Native it seems.

Basic usage:

~~~js
import  { TabNavigator } from 'react-navigator';

export const Tabs = TabNavigator ({
  Tab1: {
    screen: Tab1Screen,
    navigationOptions: {
      tabBarLabel: 'Tab1 label;,
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" color={tintColor} />
    },
  },
  Tab2: {
    screen: Tab1Screen,
  },
});
~~~

## Exercise: Create and Use a TabNavigator

Woot! Woot! Woot!

The component `TabNavigator` no longer exists --  looks like I need to implement the solution using `createBottomTabNavigator`!

First, let's install the component and native setup:

~~~bash
# Install from within project dir
$ npm install --save react-navigation-tabs
$ npm install --save react-native-reanimated

# Rebuild pod
$ cd ios && pod install && cd ..

# Recompile
$ npx react-native run-ios
~~~

... and stop Packager, restart all emulators, etc...

### Step 1: creating stacks for all

`./app/config/router.js`:

~~~js
export const NewContactStack = createStackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'New Contact',
    }
  },
});

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    }
  },
});
~~~

### Step 2: combining the stacks into tabs

`./app/config/router.js`:

~~~js
export const Tabs = createAppContainer(
  createBottomTabNavigator(
    {
      AllContactsTab: ContactsStack,
      NewContactTab: NewContactStack,
      MeTab: MeStack,
    },
    {
      // Styling will go here of icons and labels
    }
  )
);
~~~

### Step 3: add styling for icons and tabs

`./app/config/router.js`:

~~~js
...
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;

          let IconComponent = Ionicons;
          let iconName;

          if (routeName === 'AllContactsTab') {
            iconName = Platform.OS === 'ios' ? 'ios-list' : 'md-list';
          } else if (routeName === 'NewContactTab') {
            iconName = Platform.OS === 'ios' ? 'ios-add' : 'md-add';
          } else {
            iconName = Platform.OS === 'ios' ? 'ios-contact' : 'md-contact';
          }
          // We should externalize this in its own component including 
          // the logic for rendering for Android or iOS icons and style hints
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
        tabBarLabel: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let tabBarLabel;

          if (routeName === 'AllContactsTab') {
            tabBarLabel = `Contacts`;
          } else if (routeName === 'NewContactTab') {
            tabBarLabel = `New Contact`;
          } else {
            tabBarLabel = `Me`;
          }
          // We should externalize this in its own component including 
          // the applied style sheets (do not like this is hard-coded)
          return <Text style={{ textAlign: 'center', fontSize: 10, color: tintColor }}>{tabBarLabel}</Text>;
        },
      }),
      tabBarOptions: {
        activeTintColor: colors.tabIconActive,
        inactiveTintColor: colors.tabIconInactive,
      },
    }
...
~~~

### The course solution

While I realize my solution is not very elegant considering the many, many lines added for styling - I did made it to work... but the (merged with new method) from the course solution is much better:

~~~js
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
~~~

## Extra: aligned on Android the Arabic text

I noticed on my Android emulator the name for one of my contacts was aligned to the right (because of the localization of the characterset).

This looks ugly - hence I updated the styles.js for the component:

`./app/components/ListItem/styles.js`:

~~~js
...
    name: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.primaryText,
      textAlign: 'left'
    },
...
~~~
