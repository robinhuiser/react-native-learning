# React Native Notes

While following the Udemy training "Create your first React Native App" I wrote down my course notes in this repo.

## Install React Native

In my case, I work on a MacBook and want to develop apps for iOS and Android; see [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started) for details.

Using versions:

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

## React Native Apps

> Notes made from the Udemy course "Create your first React Native App - A crash course in building your first React Native app in a weekend or less!"

* [My first React Native app](./MyApp.md)
* My Contact Management App
  * [section 1](./ContactApp-1.md)
  * [section 2](./ContactApp-2.md)
  * [section 3](./ContactApp-3.md)
  * [section 4](./ContactApp-4.md)
  * [section 5](./ContactApp-5.md)
  * [section 6](./ContactApp-6.md)
