import { CSSObject } from 'styled-components';
import listItemStyleTypeNone from '../listItemStyleTypeNone/listItemStyleTypeNone';


const listPlainItem: CSSObject = {
  display: 'block',
  ...listItemStyleTypeNone,
};

export default listPlainItem;
