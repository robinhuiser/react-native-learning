# Change the app name

In case you start your project and your were at the moment without inspiration about the (final) name... the solution is here.

~~~bash
# Install
$ npm install react-native-rename -g

# Create a branch (in case something goes wrong)
$ git checkout -b rename-app

# Perform the rename within your project dir
$ react-native-rename "My Contacts"
/ios/MyContacts RENAMED
/ios/MyContacts-tvOS RENAMED
/ios/MyContacts-tvOSTests RENAMED
/ios/MyContacts.xcodeproj RENAMED
...
Done removing previous bundle directory.
Done removing builds.
APP SUCCESSFULLY RENAMED TO "My Contacts"! 🎉 🎉 🎉
Podfile has been modified, please run "pod install" inside ios directory.
Please make sure to run "watchman watch-del-all" and "npm start --reset-cache" before running the app.

# Better to run Cocoapods update...
$ cd ios && pod install && cd ..

# Test, test, test!
$ npx react-native run-ios
$ npx react-native run-android

# Once happy, commit changes to branch
$ git add -A
$ git commit -m 'Renamed app'

# Merge branch back to master
$ git checkout master
$ git merge rename-app
~~~
