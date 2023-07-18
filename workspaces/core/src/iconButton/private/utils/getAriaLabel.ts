import type ButtonAnimations from '../../../button/private/types/ButtonAnimations';

type Props = {
  ariaLabel?: string;
  animation?: ButtonAnimations;
};

const getAriaLabel = ({ ariaLabel, animation }: Props): string | undefined =>
  ariaLabel
    ? ariaLabel
    : animation === 'error'
    ? 'Error'
    : animation === 'progress' || animation === 'success'
    ? undefined
    : 'IconButton';

export default getAriaLabel;
