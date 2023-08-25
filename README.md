# expo-ahap

React Native module for loading and interacting with Apple ahap files

- Implements the Apple API for building custom haptics. Learn more: [WWDC 2021](https://developer.apple.com/videos/play/wwdc2021/10278).
- You can create ahap files online: [Here](https://ahap.fancypixel.it/).

> This library is not an official part of the Expo SDK!

You can install (at your own discretion) with:

```sh
yarn add expo-ahap
```

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

The types were converted as best-effort from the resources I could find, tested a number of methods and most things seem to work. If you find any issues, please open a PR!
