# Set the splash screen

I am using the react-native plugin [react-native-make](https://github.com/bamlab/react-native-make) on my ContactApp build during the Udemy training above.

## Image requirements

* Use a .png to preserve background transparency
* **3000px** as min height and/or width
* For **cover** splashscreens, preserve a 1/3 padding for important content to avoid clipping a Logo or Text

## Create the splash screen logo

For the design of the logo, I followed the guidelines from [BuildFire - How To Create An Amazing App Icon](https://buildfire.com/create-amazing-app-icon/).

As the logo should reflect the nature of the app I downloaded a contact icon from [FlatIcon.com](https://www.flaticon.com/free-icon/contact-book_2427205?term=contacts&page=1&position=3) as `SVG` and imported this into Omnigraffle.

In Omnigraffle I created:

* `Rectangle`
  * Size set to 3000px x 3000px
  * Border color same as `colors.link`
  * No fill
* `SVG Splash Image` from the downloaded icon
  * Size width set to 50% of rectangle
  * Positioned in the middle, little above horizontal center
  * Recolored to white
  * Added black border of 10px
* `Text` below `SVG`
  * Label: "My Contacts"
  * Font size: 200
  * Font: Helvetica Neu
  * Color: white

Last, but not least, I exported the result as a `PNG` file using `72 dots per inch`, **enabled** transparent background.

## Set the app splash screen

I will use the same splash screen for iOS as Android here.

~~~bash
# Install the npm module in the project
$ npm install --save react-native-splash-screen
~~~

Edit `./ContactApp/app/index.js`:

~~~js
import SplashScreen from 'react-native-splash-screen';

...
const App = () => {

    // In real app, do init stuff and hide the splash after...
    SplashScreen.hide();
...
~~~

~~~bash
# Inside the ContactApp project, install the plugin:
$ npm install -D @bam.tech/react-native-make

# Verify if the plugin is installed correctly:
$ npx react-native -h
...
  set-icon [options]              make generate app icons
  set-splash [options]            make generate app splash screen

# Set the splash screens for both iOS and Android - using colors.link as background
$ npx react-native set-splash --path ../ContactApp-Splash.png --resize contain --background "#007AFF"

# Install Cocoapods
$ cd ios && pod install && cd ..

# Recompile both iOS and Android
$ npx react-native run-ios
$ npx react-native run-android
~~~

Now we see the splash screen appear on both platforms.

### Trouble: Android code no longer compiles

This happened actually only one time and the file `./ContactApp/android/app/src/main/java/com/mycontacts/MainActivity.java` was slightly corrupted by a wrong insertion of the method (twice?):

~~~java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }
~~~

Easy to fix -- removed the incorrect and duplicate code, did not happen again...

### Trouble: iOS does not refresh the splash logo when updated

Some erratic behavior here in the emulator... solution was to `Erase all content and settings` and than redeploy.
