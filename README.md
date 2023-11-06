#### Cordova build

```shell
sdk install java 11.0.9.hs-adpt
npm install
npm run add
npm run build
```

#### To reproduce the issue, follow these steps:

1. Ensure that the app is uninstalled or removed from the Android test device.
2. Install the app on the Android test device for the first time.
3. Open the modal through the designated button.
4. Click either the redirect button of the modal or the close button of the modal.
5. Wait for the redirection to occur or for the modal to close.
6. Lock the screen or put the application in the background.
7. Unlock the screen or bring the application from the background to the foreground.
8. Observe whether the camera view is visible, either in a closed or open state.