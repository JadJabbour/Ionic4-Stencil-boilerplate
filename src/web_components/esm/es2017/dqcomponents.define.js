
// dqcomponents: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './dqcomponents.core.js';
import { COMPONENTS } from './dqcomponents.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
