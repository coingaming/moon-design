import { MainColors } from '../../supportColors/supportColors';
import { TextLink } from '../componentsTokens';

const fontWeightSemibold = 500;

const getTextLinkTokens: (mainColors: MainColors) => { textLink: TextLink } = (
  mainColors
) => ({
  textLink: {
    fontWeight: fontWeightSemibold,
    color: {
      default: mainColors.piccolo,
      hover: mainColors.hit,
      visited: mainColors.hit,
    },
  },
});

export default getTextLinkTokens;
