# My first app

As suggested by the [React Native Getting Started guide](https://facebook.github.io/react-native/docs/getting-started), create the new application using `npx` and do not use `react-native` CLI:

~~~bash
# Create MyApp
$ npx react-native init MyApp
~~~

... this will setup the main directory structure and projects for:

* iOS in Xcode (`./MyApp/ios/MyApp.xcodeproj`)
* Android in Android Studio (`./MyApp/android`)

## iOS

This will start the emulator and app:

~~~bash
$ cd MyApp && npx react-native run-ios
~~~

Note: the iOS development menu can be triggered via `Cmd-D`.

## Android

For Android, there are multiple AVDs which can be launched; you need to start one before running the app...

~~~bash
# List the AVDs
$ emulator -list-avds
Galaxy_Nexus_API_29
Galaxy_S10e_API_28
Nexus_5X_API_29_x86

# Let's start the Galaxy S10e
$ emulator -avd Galaxy_S10e_API_28 -netdelay none -netspeed full
emulator: ERROR: AdbHostServer.cpp:102: Unable to connect to adb daemon on port: 5037   # Ignore since we do not run Android Studio!
emulator: Warning: skin file button uses unknown key name 'menu'
emulator: Warning: skin file button uses unknown key name 'dpad-select'
emulator: Warning: skin file button uses unknown key name 'T'
emulator: Warning: skin file button uses unknown key name 'NEXT'
emulator: Saving state on exit with session uptime 199331 ms

# Start the app
$ cd MyApp && npx react-native run-android
~~~

Note: the Android development menu can be triggered via `Cmd-M`.

## VSCode tweaks

There is an [issue with VSCode and React Native](https://stackoverflow.com/questions/48859169/js-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-check)...

Use `"javascript.validate.enable": false` in your VS Code settings, It doesn't disable ESLINT. I use both ESLINT & Flow. Simply follow the instructions Flow For Vs Code Setup
