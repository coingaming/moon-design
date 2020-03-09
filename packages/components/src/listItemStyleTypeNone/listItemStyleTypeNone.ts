import { CSSObject } from 'styled-components';

const listItemStyleTypeNone: CSSObject = {
  listStyleType: 'none',
  '&:before': {
    position: 'absolute',
    content: '"\\200B"' /* Add zero-width space to prevent VoiceOver disable */,
  },
};

export default listItemStyleTypeNone;
