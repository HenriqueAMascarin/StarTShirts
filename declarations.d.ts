
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  import { ImageSourcePropType } from 'react-native';

  const content: ImageURISource;
  export default content;
}
