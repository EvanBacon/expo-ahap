# expo-ahap

React Native module for loading and interacting with Apple ahap files

- Implements the Apple API for building custom haptics. Learn more: [WWDC 2021](https://developer.apple.com/videos/play/wwdc2021/10278).
- You can create ahap files online: [Here](https://ahap.fancypixel.it/).

> This library is not an official part of the Expo SDK!

You can install (at your own discretion) with:

```sh
yarn add expo-ahap
```

Be sure to build on a physical iOS device, running iOS 13 or greater! `npx expo run:ios -d`

## API

```js
import { Player } from "expo-ahap";

const player = new Player({
  // Ahap file
});

player.start();

// Be sure to unregister later...

player.unregister();
```

## Example

Running this and pressing "Start!" should feel like _bbbbrrrppp!_ in your hand.

```js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Player } from "expo-ahap";

const player = new Player({
  Pattern: [
    {
      Event: {
        Time: 0.0,
        EventType: "HapticContinuous",
        EventDuration: 0.6,
        EventParameters: [
          { ParameterID: "HapticIntensity", ParameterValue: 1.0 },
          { ParameterID: "HapticSharpness", ParameterValue: 0.5 },
        ],
      },
    },
    {
      ParameterCurve: {
        ParameterID: "HapticIntensityControl",
        Time: 0.0,
        ParameterCurveControlPoints: [
          { Time: 0, ParameterValue: 0.2 },
          { Time: 0.6, ParameterValue: 0.7 },
          { Time: 0.601, ParameterValue: 1.0 },
        ],
      },
    },
    {
      ParameterCurve: {
        ParameterID: "HapticSharpnessControl",
        Time: 0.0,
        ParameterCurveControlPoints: [
          { Time: 0, ParameterValue: -0.5 },
          { Time: 0.6, ParameterValue: 0.5 },
        ],
      },
    },

    {
      Event: {
        Time: 0.601,
        EventType: "HapticTransient",
        EventParameters: [
          { ParameterID: "HapticIntensity", ParameterValue: 1.0 },
          { ParameterID: "HapticSharpness", ParameterValue: 0.7 },
        ],
      },
    },
  ],
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => player.start()}>Start!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Audio

Audio files can be used OTA, so long as you copy the audio into the iOS Documents Directory, this can be done with `expo-file-system`:

```ts
import React from "react";
import * as FS from "expo-file-system";
import { Asset } from "expo-asset";

function useAudioInDocumentsDir(res) {
  const [audioName, setName] = React.useState<string | null>(null);

  React.useEffect(() => {
    Asset.fromModule(res)
      .downloadAsync()
      .then(async (result) => {
        const audioName = result.localUri.split("/").pop();
        // move to the ios folder
        await FS.copyAsync({
          from: result.localUri,
          to: FS.documentDirectory + audioName,
        });

        setName(audioName);
      });
  }, [res]);

  return audioName;
}

// Later...

const audioName = useAudioInDocumentsDir(require("./path/to/audio.wav"));
```

Alternatively, you can use the [link-assets config plugin](https://github.com/evanbacon/link-assets#readme) to copy audio directly into the binary. Both generally have the same performance.


The types were converted as best-effort from the resources I could find, tested a number of methods and most things seem to work. If you find any issues, please open a PR!


