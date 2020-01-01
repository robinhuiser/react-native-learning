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

