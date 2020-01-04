# Change the App Icon

I am using the react-native plugin [react-native-make](https://github.com/bamlab/react-native-make) on my ContactApp build during the Udemy training above.

## Logo requirements

* The image (logo) has to be square
* Don't use a transparent image. Not recommended on ios
* Minimum size of the image is 1024x1024
* Format accepted : png and jpeg

## Create the app logo

For the design of the logo, I followed the guidelines from [BuildFire - How To Create An Amazing App Icon](https://buildfire.com/create-amazing-app-icon/).

As the logo should reflect the nature of the app I downloaded a contact icon from [FlatIcon.com](https://www.flaticon.com/free-icon/contact-book_2427205?term=contacts&page=1&position=3) as `SVG` and imported this into Omnigraffle.

In Omnigraffle I created:

* `Rectangle`
  * Size set to 1024px x 1024px
  * No border
  * Gradient fill (top lighter color than below)
    * Secondary color from `colors.link`
    * Primary color I played around with the color wheel to find a variation of `colors.link` until I was happy
* `SVG Icon`
  * Size set to 80% of `Rectangle`
  * Centered width and height within rectangle
  * Recolored to white
  * Added black border of 2px

Last, but not least, I exported the result as a `PNG` file using `72 dots per inch`, **disabled** transparent background.

## Set the app icon

I will use the same icon for iOS as Android here.

~~~bash
# Inside the ContactApp project, install the plugin:
$ npm install -D @bam.tech/react-native-make

# Verify if the plugin is installed correctly:
$ npx react-native -h
...
  set-icon [options]              make generate app icons
  set-splash [options]            make generate app splash screen

# Set the logos for both iOS and Android
$ npx react-native set-icon --path ../ContactApp-Logo.png

# Recompile both iOS and Android
$ npx react-native run-ios
$ npx react-native run-android
~~~

Now we see the logo appear on both platforms - both styled according to the platform specs (rounded square for iOS and circle-radius for Android).
