# React Native Notes

 My notes made learning React native.

## Install React Native

In my case, I work on a MacBook and want to develop apps for iOS and Android; see [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started) for details.

Using React native version:

~~~bash
# NPX
$ npx react-native --version  
3.0.4

# React Native version
$ cat package.json | grep '"react-native":'
    "react-native": "0.61.5",
~~~

### iOS details

* Command line tools: version 11.3
* iOS Simulator: iOS 13.3

~~~bash
# Install CocaPods
$ sudo gem install cocoapods
~~~

### Android steps

~~~bash
# Tap into AdoptOpenJDK
$ brew tap AdoptOpenJDK/openjdk

# Install
$ brew cask install adoptopenjdk/openjdk/adoptopenjdk8
~~~

Install Android Studio: [Download and install Android Studio](https://developer.android.com/studio/index.html); follow the instructions from the [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started) considering a custom installation.

## Online training: Udemy - Create your first React Native App

During the course I made the following observations since a lot has changed (API wise) since the training was published.

* [My first React Native app](./MyApp.md)
* My Contact Management App
  * [section 1](./ContactApp-1.md)
  * [section 2](./ContactApp-2.md)
  * [section 3](./ContactApp-3.md)
  * [section 4](./ContactApp-4.md)
  * [section 5](./ContactApp-5.md)
  * [section 6](./ContactApp-6.md)
  * [section 7](./ContactApp-7.md)
  * [section 8](./ContactApp-8.md)

## Misc topics

Some additional work to make the ContactApp more "production-like".

* [Set the app icon](./SetAppIcon.md)
* [Set the splash screen](./SetSplashScreen.md)
* [Change the app name](./ChangeAppName.md)
