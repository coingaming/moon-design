import { CSSObject } from 'styled-components';
import mainColors from '../v2/colors/mainColors';

type ColorValue = CSSObject['color'];

type buttonVariantsProps = {
  fill: {
    color: ColorValue;
    backgroundColor: ColorValue;
  };
  fillSecondary: {
    color: ColorValue;
    backgroundColor: ColorValue;
  };
  stroke: {
    color: ColorValue;
    background: string;
    boxShadow: string;
    '&:hover': {
      boxShadow: string;
    };
  };
};

const buttonVariantTokens: buttonVariantsProps = {
  fill: {
    color: mainColors.goten,
    backgroundColor: mainColors.piccolo,
  },
  fillSecondary: {
    color: mainColors.goten,
    backgroundColor: mainColors.hit,
  },
  stroke: {
    color: mainColors.bulma,
    background: 'none',
    boxShadow: `inset 0 0 0 1px ${mainColors.trunks}`,
    '&:hover': {
      boxShadow: `inset 0 0 0 1px ${mainColors.bulma}`,
    },
  },
};

export default buttonVariantTokens;
