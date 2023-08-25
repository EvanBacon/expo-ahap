import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to Ahap.web.ts
// and on native platforms to Ahap.ts
import AhapModule from "./src/AhapModule";
import { ChangeEventPayload, AhapViewProps } from "./src/Ahap.types";

// Get the native constant value.
export const PI = AhapModule.PI;

/**
 * Parameters used to modify individual haptic and/or audio events.
 *
 * Event parameters are specified as part of the creation of a CHHapticEvent or in an event definition in a haptic pattern.
 * The combination of Event parameters will determine the character of the haptic or audio event.
 */
type CHHapticEventParameterID =
  /**
   * The perceived intensity (volume) of a haptic event.
   * Range: 0.0 (maximum attenuation) to 1.0 (no attenuation).
   */
  | "HapticIntensity"

  /**
   * Depending on the event's signal content, this may map to frequency, frequency content (i.e., filtering),
   * or some other signal processing.
   * Range: 0.0 (least sharp) to 1.0 (most sharp).
   */
  | "HapticSharpness"

  /**
   * The attack time adjuster for a Continuous event's envelope.
   * Range: 0.0 to 1.0, with default: 0.0 (shortest attack time).  Higher values increase the time exponentially.
   * Not all event types respond to this parameter.
   */
  | "AttackTime"

  /**
   * The decay time adjuster for a Continuous event's envelope.
   * Range: 0.0 to 1.0, with default: 0.0 (shortest decay time).  Higher values increase the time exponentially.
   * For envelope decay to take effect, the `Sustained` parameter must be set to 0.0.
   * Not all event types respond to this parameter.*/
  | "DecayTime"

  /**
   * The release time adjuster for a Continuous event's envelope.
   * Range: 0.0 to 1.0, with default: 0.0 (shortest release time).  Higher values increase the time exponentially.
   * Not all Continuous event types respond to this parameter.
   */
  | "ReleaseTime"

  /**
   * A boolean (1.0 or 0.0) which indicates whether a Continuous event sustains for its specified duration
   * (using an Attack/Release envelope) or whether the event ends when its envelope decay segment reaches its minimum
   * (i.e., using an Attack/Decay envelope with no sustain).
   * Default: 1.0 (sustained, Attack/Release).
   */
  | "Sustained"

  /** The volume of an audio event.
   * Range: 0.0 (maximum attenuation) to 1.0 (no attenuation).
   */
  | "AudioVolume"

  /**
   * The pitch adjuster for audio events.
   * Range: -1.0 (lowest pitch) to 1.0 (highest pitch).
   */
  | "AudioPitch"

  /**
   * The stereo panning for an audio event.
   * Range: -1.0 (panned full left) to 1.0 (panned full right).
   * Default: 0.0 (panned center).
   */
  | "AudioPan"
  /**
   * The high frequency content an audio event.
   * Range: 0.0 (frequency content reduced the most) to 1.0 (no reduction of frequency content).
   * Default: 1.0.
   */
  | "AudioBrightness";

/**
 * Parameters used to dynamically modify all haptic or audio events within a pattern.
 *
 * Dynamic parameters are not tied to specific events; each dynamic parameter modifies (modulates) the
 * effect of the corresponding event parameter for events which respond to the parameter.
 *
 * The `CHHapticDynamicParameterIDHaptic` types only affect haptic event types, and the `CHHapticDynamicParameterIDAudio`
 * types only affect audio event types.  Not all `CHHapticDynamicParameterID`s will have an effect on every `CHHapticEventType`.
 */
type CHHapticDynamicParameterID =
  /**
   * Adjusts the intensity of all active and future haptic events.
   * @range 0.0 (event intensities reduced by the maximum amount) to 1.0 (no effect on event intensities).
   * @default 1.0
   */
  | "HapticIntensityControl"

  /**
   * This will adjust the frequency, frequency content (i.e., filtering), or other aspects of all active and future haptic events.
   * @range -1.0 (less sharp) to 1.0 (more sharp).
   * @default 0.0 (no effect).
   */
  | "HapticSharpnessControl"
  /**
   * Adjusts the envelope attack time of all active and future haptic events.
   * @range -1.0 (event attacks shorter) to 1.0 (event attacks longer).
   * @default 0.0 (no effect).
   * Not all haptic event types respond to this parameter.
   */
  | "HapticAttackTimeControl"

  /**
   * Adjusts the envelope decay time of all active and future Transient haptic events.
   * @range -1.0 (event decays shorter) to 1.0 (event decays longer).
   * @default 0.0 (no effect).
   * Not all haptic event types respond to this parameter.
   */
  | "HapticDecayTimeControl"

  /**
   * Adjusts the envelope release time of all active and future Continuous haptic events.
   * @range -1.0 (event releases shorter) to 1.0 (event releases longer).
   * @default 0.0 (no effect).
   * Not all haptic event types respond to this parameter.
   */
  | "HapticReleaseTimeControl"

  /**
   * Adjusts the volume of all active and future audio events.
   * @range 0.0 (event intensities reduced by the maximum amount) to 1.0 (no effect).
   * @default 1.0
   */
  | "AudioVolumeControl"

  /**
   * Adjusts the panning of all active and future audio events.
   * @range -1.0 (events panned more left) to 1.0 (event panned more right).
   * @default 0.0 (no effect).
   */
  | "AudioPanControl"
  /**
   * Adjusts the high frequency content of all active and future audio events.
   * @range -1.0 (more filtering) to 1.0 (less filtering).
   * @default 0.0 (no effect).
   * */
  | "AudioBrightnessControl"
  /**
   * Adjusts the transposition of the audio event.
   * @range -1.0 to 1.0.  Negative values decrease pitch; positive values increase pitch.
   * @default 0.0 (no effect).
   */
  | "AudioPitchControl"

  /**
   * Adjusts the envelope attack time of all active and future audio events.
   * @range -1.0 (event attacks shorter) to 1.0 (event attacks longer).
   * @default 0.0 (no effect).
   * Not all audio event types respond to this parameter.
   */
  | "AudioAttackTimeControl"

  /**
   * Adjusts the envelope decay time of all active and future Transient audio events.
   * @range -1.0 (event decays shorter) to 1.0 (event decays longer).
   * @default 0.0 (no effect).
   * Not all audio event types respond to this parameter.
   */
  | "AudioDecayTimeControl"

  /**
   * Adjusts the envelope release time of all active and future Continuous audio events.
   * @range -1.0 (event releases shorter) to 1.0 (event releases longer).
   * @default 0.0 (no effect).
   * Not all audio event types respond to this parameter.
   */
  | "AudioReleaseTimeControl";

type AhapEventPatternValue = {
  ParameterID: CHHapticEventParameterID;
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
    ParameterID: CHHapticDynamicParameterID;
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

export class Player {
  private id = Math.random().toString();
  private subscription: Subscription;

  private subscribers: Set<() => void> = new Set();

  constructor(pattern: AhapType) {
    AhapModule.register(this.id, pattern);

    this.subscription = addChangeListener((event) => {
      if (event.name === this.id) {
        for (const subscriber of this.subscribers) {
          subscriber();
        }
      }
    });
  }

  addEventListener(callback: () => void) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  get isMuted(): boolean {
    return AhapModule.getIsMuted(this.id);
  }
  set isMuted(value: boolean) {
    AhapModule.setIsMuted(this.id, value);
  }

  get loopEnabled(): boolean {
    return AhapModule.getLoopEnabled(this.id);
  }
  set loopEnabled(value: boolean) {
    AhapModule.setLoopEnabled(this.id, value);
  }

  get playbackRate(): number {
    return AhapModule.getPlaybackRate(this.id);
  }
  set playbackRate(value: number) {
    AhapModule.setPlaybackRate(this.id, value);
  }

  get getLoopEnd(): number {
    return AhapModule.getLoopEnd(this.id);
  }
  set setLoopEnd(value: number) {
    AhapModule.setLoopEnd(this.id, value);
  }

  start(time?: number) {
    AhapModule.action(this.id, "start", time);
  }
  stop(time?: number) {
    AhapModule.action(this.id, "stop", time);
  }
  pause(time?: number) {
    AhapModule.action(this.id, "pause", time);
  }
  resume(time?: number) {
    AhapModule.action(this.id, "resume", time);
  }
  seek(time: number) {
    AhapModule.action(this.id, "seek", time);
  }
  unregister() {
    AhapModule.unregister(this.id);
    this.subscription.remove();
  }

  sendParameters(
    params: {
      ParameterID: CHHapticDynamicParameterID;
      ParameterValue: number;
      /** Relative time */
      Time: number;
    }[],
    time?: number
  ) {
    AhapModule.send(this.id, params, time);
  }

  scheduleParameterCurve(
    curve: AhapParameterCurvePattern["ParameterCurve"],
    time?: number
  ) {
    AhapModule.schedule(this.id, curve, time);
  }
}

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

const emitter = new EventEmitter(AhapModule ?? NativeModulesProxy.Ahap);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("finished", listener);
}

export { AhapViewProps, ChangeEventPayload };
