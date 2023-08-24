import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Ahap.web.ts
// and on native platforms to Ahap.ts
import AhapModule from './src/AhapModule';
import AhapView from './src/AhapView';
import { ChangeEventPayload, AhapViewProps } from './src/Ahap.types';

// Get the native constant value.
export const PI = AhapModule.PI;

export function hello(): string {
  return AhapModule.hello();
}

export async function setValueAsync(value: string) {
  return await AhapModule.setValueAsync(value);
}

const emitter = new EventEmitter(AhapModule ?? NativeModulesProxy.Ahap);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AhapView, AhapViewProps, ChangeEventPayload };
