import { CSSObject } from 'styled-components';
import { MainColors } from '../../supportColors/supportColors';

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

const buttonVariantTokens: (mainColors: MainColors) => buttonVariantsProps = (
  mainColors
) => ({
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
});

const getButtonTokens = (mainColors: MainColors) => {
  const tokens = buttonVariantTokens(mainColors);
  return {
    button: {
      primary: tokens.fill,
      secondary: tokens.stroke,
      tertiary: tokens.fillSecondary,
    },
  };
};

export default getButtonTokens;
