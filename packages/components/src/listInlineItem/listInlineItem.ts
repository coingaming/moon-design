import listItemStyleTypeNone from '../listItemStyleTypeNone/listItemStyleTypeNone';

import type { CSSObject } from 'styled-components';

const listInlineItem: CSSObject = {
  display: 'inline-block',
  ...listItemStyleTypeNone,
};

export default listInlineItem;
