import type { ButtonProps } from '../../Button';

const buttonVariants = ({ variant }: ButtonProps) => {
  if (variant === 'primary') {
    return 'text-goten bg-piccolo';
  }
  if (variant === 'secondary') {
    return 'text-bulma bg-transparent shadow-[0_0_0_1px_inset] shadow-trunks hover:shadow-bulma';
  }
  if (variant === 'tertiary') {
    return 'text-goten bg-hit';
  }
  if (variant === 'ghost') {
    return 'text-trunks bg-transparent hover:text-bulma';
  }
  return '';
};

export default buttonVariants;
