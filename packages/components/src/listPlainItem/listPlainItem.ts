import listItemStyleTypeNone from '../listItemStyleTypeNone/listItemStyleTypeNone';

import { CSSObject } from 'styled-components';

const listPlainItem: CSSObject = {
  display: 'block',
  ...listItemStyleTypeNone,
};

export default listPlainItem;
