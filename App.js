import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Ahap from "local:ahap";
import React from "react";

const player = new Ahap.Player({
  Pattern: [
    {
      Event: {
        Time: 0.05490196078431372,
        EventType: "HapticContinuous",
        EventDuration: 0.7241830065359477,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.19084967320261434,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8911764705882353,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8911764705882353,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.28366013071895424,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8558823529411764,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8558823529411764,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.37908496732026137,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8558823529411764,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8558823529411764,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.37908496732026137,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8558823529411764,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8558823529411764,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.46274509803921565,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8205882352941176,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8205882352941176,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5281045751633986,
        EventType: "HapticContinuous",
        EventDuration: 0.006999999999999999,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8205882352941176,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8205882352941176,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5281045751633986,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8205882352941176,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8205882352941176,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5581699346405229,
        EventType: "HapticContinuous",
        EventDuration: 0.006999999999999999,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5581699346405229,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5803921568627451,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5895424836601307,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.7441176470588236,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.7441176470588236,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5895424836601307,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6088235294117647,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6088235294117647,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.5986928104575163,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5088235294117647,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5088235294117647,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.6326797385620915,
        EventType: "HapticContinuous",
        EventDuration: 0.006999999999999999,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5852941176470589,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5852941176470589,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.6326797385620915,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5852941176470589,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5852941176470589,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.6326797385620915,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.7264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.7264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.6705882352941176,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8323529411764706,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8323529411764706,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.7503267973856208,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.792156862745098,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5617647058823529,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5617647058823529,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.7986928104575163,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4147058823529412,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4147058823529412,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.8535947712418301,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.26176470588235295,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.26176470588235295,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.8666666666666667,
        EventType: "HapticContinuous",
        EventDuration: 0.006999999999999999,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6735294117647059,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6735294117647059,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.8666666666666667,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6735294117647059,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6735294117647059,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.9202614379084967,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.8794117647058823,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.8794117647058823,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.9477124183006536,
        EventType: "HapticContinuous",
        EventDuration: 0.006999999999999999,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5323529411764706,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5323529411764706,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.9477124183006536,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5323529411764706,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5323529411764706,
          },
        ],
      },
    },
    {
      Event: {
        Time: 0.9581699346405228,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.3323529411764706,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.3323529411764706,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.0457516339869282,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.3323529411764706,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.3323529411764706,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.0457516339869282,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.0836601307189542,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6676470588235294,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6676470588235294,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.0836601307189542,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6676470588235294,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6676470588235294,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.1594771241830066,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.43823529411764706,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.43823529411764706,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.1712418300653595,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.25588235294117645,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.25588235294117645,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.2405228758169933,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.25588235294117645,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.25588235294117645,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.2732026143790849,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5558823529411765,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5558823529411765,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.318954248366013,
        EventType: "HapticContinuous",
        EventDuration: 0.006999999999999999,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.3202614379084967,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.6264705882352941,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.6264705882352941,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.3738562091503266,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.061764705882352944,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.061764705882352944,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.4819794584500467,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.5205882352941177,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.5205882352941177,
          },
        ],
      },
    },
    {
      Event: {
        Time: 1.9929038281979459,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.0526610644257706,
        EventType: "HapticContinuous",
        EventDuration: 0.016,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.0526610644257706,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.3215686274509806,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.3484593837535015,
        EventType: "HapticContinuous",
        EventDuration: 0.016,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.3484593837535015,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.6651727357609714,
        EventType: "HapticContinuous",
        EventDuration: 0.016,
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
    {
      Event: {
        Time: 2.6651727357609714,
        EventType: "HapticTransient",
        EventParameters: [
          {
            ParameterID: "HapticIntensity",
            ParameterValue: 0.4852941176470588,
          },
          {
            ParameterID: "HapticSharpness",
            ParameterValue: 0.4852941176470588,
          },
        ],
      },
    },
  ],
});

export default function App() {
  player.addEventListener(() => {
    console.log("done");
  });
  const play = React.useCallback(() => {
    player.start();
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={() => play()}>
        Open up App.js to start working on your app!
      </Text>

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
