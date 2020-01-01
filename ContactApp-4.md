# ContactApp - section 4

My notes creating my ContactApp application - based upon previous sections.

## Screen navigation props

You can pass information from one screen to another, update information and also return to previous screen:

~~~js
// From screen A
this.props.navigation.navigate('ScreenB', { name: 'Robin', email: 'robin@rdc.pt' });

// Screen B
class ScreenB extends React.Component {

  updateName = () => {
    this.props.navigation.setParams({ name: 'Maria' })
  }

  saveProfile = () => } {
    // Do save stuff
    this.props.navigation.goBack();
  }

  render() {
    const { name, email } = this.props.navigation.state.params;
  }
}
~~~

...as an altertive, I might want to pass all properties of an object, so I can use:

~~~js
...
const contact = this.props.navigation.state.params;

...
<Header {...contact} />
~~~

## Custom navigation bar title

Added to `./app/config/router.js` a dynamic title:

~~~js
...
import { capitalizeFirstLetter } from '../helpers/string'

...
      navigationOptions : ({ navigation }) => ({
        title: navigation.state.params.name.first.capitalizeFirstLetter() + " " +
               navigation.state.params.name.last.capitalizeFirstLetter() ,
      }),
~~~

## Exercise: Create and use a header component

Easier than the previous exercises (guess I am becoming more familiar with the environment), but still had to peak into the solutions to make this work...

## Scrollview

Allows me to combine multiple (different) components and scroll if the screen size is exceeded, but it has some performance and other caveats compared to FlatList.

## Create and use an Action component

Amazing... specifically how the instructor extracted the `Row` component from the `Actions`... Got it to work and understand (and can repeat) now the exercise.

## Installation of Moment.js

Parse, validate and transform dates in Javascript using library [moment.js](https://momentjs.com/).

~~~bash
# Install
$ npm install --save moment
~~~

Basic usage:

~~~js
import moment from 'moment';

const date = Date();

// See: https://momentjs.com/docs/#/displaying/
moment(date).format('MMMM Do, YYYY'); // January 1st, 2020
~~~

## Exercise: create user Info

Niceeee.... first one I did without peeking into solutions guide! Works!

### Extra: make a call when clicking on icon

~~~bash
# Install
$ npm install --save react-native-phone-call
~~~

...and update the `Actions.js` with:

~~~js
// Add to imports
import call from 'react-native-phone-call'

// Add handle function
const Actions = ({ email, phone, cell }) => {

  handleCallPhonePress = (number) => {
    call(number).catch(console.error)
  };

  return (
    ...

// Point onPress to handle function
      <Row
        label="cell"
        body={cell.toPhoneNumber()}
        actions={[
          {
            onPress: () => this.handleCallPhonePress({ number: cell }),
            iosIcon: 'ios-call',
            ...
~~~

Note for iOS simulator, this will give an error, but it works on a real iPhone.
