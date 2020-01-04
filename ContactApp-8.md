# ContactApp - section 8

My notes creating my ContactApp application - based upon previous sections.

## Text input

Basic usage:

~~~js
import { TextInput } from 'react-native';

<TextInput
    placeholder="Your input here..."
    style="width: 300, height: 30"
    onChangeText={(text) => console.log(text)}
    autoCorrect={false}
    autoCapatalize="none" // could be: words, sentences, character
/>
~~~

## Exercise: Add two text fields to New Contact

What should have been a walk in the park (except for propagating props) became a 30 minute hunt for a typo...

`index.js`:

~~~js
// Wrong
import { CustomTextInput } from './CustomTextInput';

// Right
import CustomTextInput from './CustomTextInput';
~~~

I was trying not to copy-paste in order to get the "hang of it"...

## Keyboard aware scroll view

~~~bash
# Install
$ npm install --save react-native-keyboard-aware-scroll-view
~~~

Simple - fairly straight forward -- import package and replace `<ScrollView>` with `KeyboardAwareScrollView`.

## Advanced: implement keyboard navigation

Good adding for user experience - was a bit complex tough to grasp.

## More resources to look at

Instructor has:

* [Medium Profile](https://medium.com/@spencer_carli)
* [YouTube Channel](https://www.youtube.com/HandlebarLabs)
* [Email List](http://www.handlebarlabs.com/email-list/)

Free React Native course: it's longer but it goes into much more detail than this course. I think you'll like it - we dive deeper into components, animations, navigation, redux, working external API's, and more.

* [React Native Basics: Build a Currency Converter](http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter?ref=udemy)

To find high quality curated components checkout [JS.Coach](https://js.coach/react-native).

A great place to find all the "awesome" things related to React Native is the [Awesome React Native](https://github.com/jondot/awesome-react-native) repo.

A few tutorials you may enjoy...

* [How to make your React Native app respond gracefully when the keyboard pops up](https://medium.freecodecamp.com/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580#.2sh34nrzg)
* [React Native Basics: Geolocation](https://hackernoon.com/react-native-basics-geolocation-adf3c0d10112#.h2ovcvp5t)
* [Playing with React Native Animations](https://medium.com/@spencer_carli/playing-with-react-native-animations-d065e7e97391#.9oyu7prrh)
* [Managing Configuration in React Native](https://medium.com/differential/managing-configuration-in-react-native-cd2dfb5e6f7b)
* [Building Offline First React Native Apps](https://medium.com/differential/building-offline-first-react-native-apps-b958acac0009#.9v9d9017j)
* [Handling Offline Actions in React Native](https://medium.com/differential/handling-offline-actions-in-react-native-74949cbfabf2#.rshh4zm4j)
