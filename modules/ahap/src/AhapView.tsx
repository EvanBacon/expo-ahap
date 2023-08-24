import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AhapViewProps } from './Ahap.types';

const NativeView: React.ComponentType<AhapViewProps> =
  requireNativeViewManager('Ahap');

export default function AhapView(props: AhapViewProps) {
  return <NativeView {...props} />;
}
