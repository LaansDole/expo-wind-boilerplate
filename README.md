## Pre-requisite
- You should have `Expo Go` application on your mobile device. It is available in both Google Play Store and App Store.
- ***Optional but highly recommended:*** Download and Install [AirDroid Cast](https://www.airdroid.com/ad/airdroid-cast/) on both your mobile device and PC/Laptop Device.

## Local Build

- Clone the project to your local machine
- Install `node_modules` package
```bash
yarn install
yarn global add eas-cli
```
### In the project directory, you can run:
- ***For first run:*** 
```bash
npm start
```
From here, if you cannot run `Expo Go` by scanning the QR Code, `Ctrl + C` and run `npm run tunnel`. 
- Runs the app in the development mode. Open it in the Expo app on your phone to view it.
```bash
npm start
```
- Starts the dev server and tunnels the connection so you can access it anywhere, especially for WSL2.
```bash
npm run tunnel
```
- Runs the app on an Android device or emulator.
```bash
npm run android
```
- Runs the app on an iOS simulator.
```bash
npm run ios
```
- Runs the app in the web browser.
```bash
npm run web
```

### Tools and Technologies
- [Expo](https://docs.expo.dev/)
- [NativeWind](https://www.nativewind.dev/quick-starts/expo)
#### ***For more information, see [Packages and Dependencies](./package.json)***