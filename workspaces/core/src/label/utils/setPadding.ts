import LabelProps from '../private/types/LabelProps';

const setPadding = ({ size, iconRight, iconLeft }: LabelProps) =>
  `${size === '2xs' ? 'py-0' : 'py-1'} 
  ${iconRight ? 'pr-1' : 'pr-2'} 
  ${iconLeft ? 'pl-1' : 'pl-2'}`;

export default setPadding;
