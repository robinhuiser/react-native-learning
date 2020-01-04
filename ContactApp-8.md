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