import type ChipProps from '../types/ChipProps';

const getActive = ({
  isActive,
  isStroke,
}: Pick<ChipProps, 'isActive' | 'isStroke'>): string =>
  isStroke && isActive
    ? 'shadow-interactive bg-jiren text-piccolo'
    : isActive
    ? 'bg-jiren text-piccolo'
    : 'text-bulma';

export default getActive;
