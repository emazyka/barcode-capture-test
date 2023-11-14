#### Cordova build

```shell
sdk install java 11.0.9.hs-adpt
npm install
npm run add
npm run build
```

#### (Partial) Issue 2: Open/Close Modal - Resumability Issue with Camera Permission Granted

1. Ensure that the app is uninstalled or removed from the Android test device.
2. Install the app on the Android test device for the first time.
3. Open the modal through the designated button.
4. Choose permission option: While using the app.
5. Click the close button of the modal.
6. Wait for the modal to close.
7. Lock the screen or put the application in the background.
8. Unlock the screen or bring the application from the background to the foreground.
9. Note that the camera view is visible, in an open state.

#### Issue 3: Redirect Issue

1. Ensure that the app is uninstalled or removed from the Android test device.
2. Install the app on the Android test device for the first time.
3. Open the modal through the designated button.
4. Choose permission option: While using the app.
5. Click the redirect button of the modal.
6. Wait for the redirection to occur.
7. Lock the screen or put the application in the background.
8. Unlock the screen or bring the application from the background to the foreground.
9. Note that the camera view is visible, in an open state.
