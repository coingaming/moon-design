import type ChipProps from '../types/ChipProps';

const getDisabled = ({
  disabled,
  isStroke,
}: Pick<ChipProps, 'disabled' | 'isStroke'>): string =>
  disabled
    ? 'opacity-60 cursor-not-allowed'
    : isStroke
      ? 'hover:shadow-interactive hover:text-piccolo hover:bg-jiren'
      : 'hover:text-piccolo hover:bg-jiren';

export default getDisabled;
