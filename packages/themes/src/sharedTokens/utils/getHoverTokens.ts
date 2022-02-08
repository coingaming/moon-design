import { MainColors } from '../../supportColors/supportColors';

const getHoverTokens = (mainColors: MainColors) => ({
  hover: {
    primary: `${mainColors.bulma}12`,
    secondary: `${mainColors.piccolo}12`,
  },
});

export default getHoverTokens;
