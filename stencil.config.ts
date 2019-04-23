import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'dqcomponents',
  srcDir: 'stencil_components',
  outputTargets:[
    {
      type: 'dist',
      dir: 'src/web_components'
    }
  ],
  enableCache: true, 
};
