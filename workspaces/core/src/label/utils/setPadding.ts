import LabelProps from '../private/types/LabelProps';

const setPadding = ({ size, iconRight, iconLeft }: LabelProps) =>
  `${size === '2xs' ? 'py-0' : 'py-1'} 
  ${iconRight ? 'pe-1' : 'pe-2'} 
  ${iconLeft ? 'ps-1' : 'ps-2'}`;

export default setPadding;
