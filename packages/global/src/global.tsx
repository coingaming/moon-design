import * as React from 'react';
import { Global as EmotionGlobal, CSSObject } from '@emotion/core';

import { styles as globalStyles } from './styles';

export type GlobalProps = {
  styles?: CSSObject | CSSObject[];
};

export const Global: React.FC<GlobalProps> = ({ styles, ...props }) => (
  <EmotionGlobal styles={[globalStyles, styles]} {...props} />
);
