import * as React from 'react';

import { AhapViewProps } from './Ahap.types';

export default function AhapView(props: AhapViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
