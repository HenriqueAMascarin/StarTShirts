
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.gltf' {
  const content: string;
  export default content;
}

declare module '*.rar' {
  const content: string;
  export default content;
}

declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  import { ImageURISource } from 'react-native';

  const content: ImageURISource;
  export default content;
}
