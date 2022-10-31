import type Props from '../types/Props';

const getCircularPathRatio = (value: Props['value']) => {
  const minValue = 0;
  const maxValue = 100;
  const boundedValue = Math.min(Math.max(value as number, minValue), maxValue);
  return (boundedValue - minValue) / (maxValue - minValue);
};

export default getCircularPathRatio;
