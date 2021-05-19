import listItemStyleTypeNone from '../listItemStyleTypeNone/listItemStyleTypeNone';

import type { CSSObject } from 'styled-components';

const listPlainItem: CSSObject = {
  display: 'block',
  ...listItemStyleTypeNone,
};

export default listPlainItem;
