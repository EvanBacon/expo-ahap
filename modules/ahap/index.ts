import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to Ahap.web.ts
// and on native platforms to Ahap.ts
import AhapModule from "./src/AhapModule";
import AhapView from "./src/AhapView";
import { ChangeEventPayload, AhapViewProps } from "./src/Ahap.types";

// Get the native constant value.
export const PI = AhapModule.PI;

type AhapEventPatternValue = {
  ParameterID: "HapticIntensity" | "HapticSharpness" | "AudioVolume";
  ParameterValue: number;
};

type AhapParameterCurveControlPoints = {
  Time: number;
  ParameterValue: number;
};

type AhapEventPattern = {
  Event:
    | {
        EventType: "HapticContinuous";
        Time: number;
        EventDuration: number;
        EventParameters: AhapEventPatternValue[];
      }
    | {
        EventType: "HapticTransient";
        Time: number;
        EventParameters: AhapEventPatternValue[];
      }
    | {
        EventType: "AudioCustom";
        Time: number;
        EventWaveformPath: string;
        EventParameters: AhapEventPatternValue[];
      };
};

type AhapParameterCurvePattern = {
  ParameterCurve: {
    ParameterID: "HapticIntensityControl";
    Time: number;
    ParameterCurveControlPoints: AhapParameterCurveControlPoints[];
  };
};

type AhapType = {
  Version?: 1.0;
  Metadata?: {
    Project: string;
    Created: string;
    Description: string;
  };
  Pattern: (AhapEventPattern | AhapParameterCurvePattern)[];
};

export function playAhap(ahap: AhapType) {
  AhapModule.playAhap(ahap);
  // return AhapModule.hello(
  //   {
  //     "Version": 1.0,
  //     "Metadata":
  //         {
  //             "Project" : "HapticRicochet",
  //             "Created" : "1 June 2021",
  //             "Description" : "Effect for adding a shield to the ball using an continuous event."
  //         },
  //     "Pattern":
  //     [
  //         {
  //             "Event":
  //             {
  //                 "Time": 0.0,
  //                 "EventType": "HapticContinuous",
  //                 "EventDuration": 0.5,
  //                 "EventParameters":
  //                 [
  //                     { "ParameterID": "HapticIntensity", "ParameterValue": 1.0 },
  //                     { "ParameterID": "HapticSharpness", "ParameterValue": 0.5 }
  //                 ]
  //             }
  //         },
  //         {
  //             "ParameterCurve":
  //             {
  //                 "ParameterID": "HapticIntensityControl",
  //                 "Time": 0.0,
  //                 "ParameterCurveControlPoints":
  //                 [
  //                     { "Time": 0, "ParameterValue": 0.0 },
  //                     { "Time": 0.5, "ParameterValue": 0.75 }
  //                 ]
  //             }
  //         },
  //         {
  //             "Event":
  //             {
  //                 "Time":0.0,
  //                 "EventType":"AudioCustom",
  //                 "EventWaveformPath":"ShieldA.wav",
  //                 "EventParameters":
  //                 [
  //                     {"ParameterID":"AudioVolume","ParameterValue":0.75}
  //                 ]
  //             }
  //         }
  //     ]
  // }
  // );
}

export async function setValueAsync(value: string) {
  return await AhapModule.setValueAsync(value);
}

const emitter = new EventEmitter(AhapModule ?? NativeModulesProxy.Ahap);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { AhapView, AhapViewProps, ChangeEventPayload };
