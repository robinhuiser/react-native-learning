# ContactApp - section 2

My notes creating my ContactApp application - based upon previous sections.

Create the file `./app.config/data.js` from the Udemy course Github.

## Ugly list of emails

For convenience, create a central place to store color choices (./app/config/colors.js):

~~~js
export default {
    background: '#ffffff'
}
~~~

Next...

* Import the colors via `import colors from '../config/colors';`
* Import the contact data via `import {contacts} from '../config/data';`
* Add Flatlist to imports or react-native: `import { View, Text, FlatList } from 'react-native';`
* Update the render function as shown below:

~~~js
    ...
    render() {
        return (
            <FlatList
                style={{ backgroundColor: colors.background }}
                data={contacts}
                renderItem={({ item }) =>
                    <View><Text>{item.email}</Text></View>
                }
                keyExtractor={(item) => item.email}
            />
        )
    }
    ...
~~~

### Extra

Play around with the list, change the `renderItem` to:

~~~html
<View>
    <Text>
        {item.name.title.capitalizeFirstLetter()}
        {item.name.title.length < 5 ? "." : ""}&nbsp;
        {item.name.first.capitalizeFirstLetter()}&nbsp;
        {item.name.last.capitalizeFirstLetter()}
    </Text>
</View>
~~~

... and create the file `./app/helpers/string.js` with:

~~~js
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
~~~

Do not forget to import in `Contacts.js`: 

~~~js
import '../helpers/string'
~~~

## Organize the components

A component has at least 3 files in its directory:

~~~text
components
└── ListItem
    ├── ListItem.js
    ├── index.js
    └── styles.js
~~~

* `index.js` - defines what is exported from this component
* `styles.js` - single place where all style related information for this component
* `ComponentName.js` - this is the react native component

## StyleSheet and Flexbox

Useful links:

* https://facebook.github.io/react-native/docs/style
* https://facebook.github.io/react-native/docs/flexbox

Basic example of a style:

~~~js
import { Stylesheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
~~~

## Platform API

Allows us to create look and feel for a specific platform (iOS, Android), for example with icons. See the React Native [platform specific code guide](https://facebook.github.io/react-native/docs/platform-specific-code#__docusaurus) for more information.

Basic example:

~~~js
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const icon = Platform.OS === 'ios' ? 'ios-icon' : 'android-icon';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: Platform.OS === 'ios' ? 50 : 80;
    },
});
~~~

## Creating helper functions

I prefer to use a more object oriented approach than what the course suggests, hence:

~~~js
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toPhoneNumber = function() {
    const modText = this.replace(/[^\d]/g, '');
    return modText.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
}
~~~

## Install React Native Vector icons

Base repo: https://github.com/oblador/react-native-vector-icons

~~~bash
# Install the npm in our current project as dependency
$ npm install --save react-native-vector-icons

# You no longer need to link these icons to the native platforms
# React Native CLI uses autolinking for native dependencies!!
# $ npx react-native link react-native-vector-icons

# See: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md
~~~

Next, stop the simulators and ReactPackager and run `pod install` under the `./ios` directory:

~~~bash
# Note the RNVectorIcons!
$ cd ios && pod install & cd ..
Detected React Native module pod for RNVectorIcons
Analyzing dependencies
Downloading dependencies
Installing RNVectorIcons (6.6.0)
Generating Pods project
Integrating client project
Pod installation complete! There are 29 dependencies from the Podfile and 27 total pods installed.
~~~

Last, just start the simulators again and the icon sets will be available!

## Icon component

Docs: https://github.com/oblador/react-native-vector-icons#icon-component

Basic example:

~~~js
import Icon from 'react-native-vector-icons/Ionicons';

<Icon
    name="ios-arrow-forward"
    size={35}
    style={{ alignSelf: 'flex-end' }}
    color="#ad16ff"
/>
~~~

## Create and use ListItem Component

Big exercise - would not be able to do this one without "peaking" into the solution due to my limited knowledge of CSS and JS in general... but I managed to get this up and running and solve all the issues.

### Problem: Unrecognized font family on iOS

The cause was the dynamic linking forgot to add the font definitions to my `Info.plist`!

Solution: replace the lines below in my `./ios/ContactApp/Info.plist`:

~~~xml
<key>UIAppFonts</key>
<array />
~~~

...with:

~~~xml
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
</array>
~~~

Restart iOS simulator and Packager solved the issue.

### Problem: Fonts do not render on Android

I noticed a box with an `[X]` icon where I would expect the Ionic font (arrow) to appear... Looks like my fonts are not loading!

Solution: Add the definition below to the Gradle build file `./android/app/build.gradle`.

Replace the lines below in `./android/app/build.gradle`:

~~~gradle
apply from: "../../node_modules/react-native/react.gradle"
~~~

...with:

~~~gradle
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
~~~

Restart Android simulator and Packager + compile app solved the issue.

### Problem: Thumbnails do not render on Android

None of the images would load on my Android emulator...

Solution: fix Android Wifi (was connected to network, but not able to reach the Internet).

~~~bash
# Start the Android emulator with Google DNS...
$ emulator -avd Galaxy_S10e_API_28 -netdelay none -netspeed full -dns-server 8.8.8.8 &
~~~
