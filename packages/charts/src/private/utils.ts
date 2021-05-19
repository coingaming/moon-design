const getNormalizedValue = (
  value: number,
  maxValue: number,
  minValue: number,
) => (value === 0 ? 0 : value / (value > 0 ? maxValue : minValue));

type GetBarChartDataProps = {
  data: {
    label: string | React.ReactNode;
    code: string;
    dataKey: string;
    value: number;
  }[];
  formatFn: (props: { value: any; key: string }) => any;
  positiveColor: string;
  negativeColor: string;
};

export const getBarChartData = ({
  data,
  formatFn,
  positiveColor,
  negativeColor,
}: GetBarChartDataProps) => {
  const maxValue = Math.max.apply(
    null,
    data.map(({ value }) => value),
  );
  const minValue = Math.min.apply(
    null,
    data.map(({ value }) => value),
  );

  return data.map((item) => {
    const normalizedValue = getNormalizedValue(item.value, maxValue, minValue);
    const valueToOpacity = normalizedValue < 0.3 ? 0.3 : normalizedValue;

    return {
      ...item,
      value: formatFn({ value: item.value, key: item.dataKey }),
      isNegative: item.value < 0,
      percent: normalizedValue * 100,
      opacity: valueToOpacity,
      color: item.value < 0 ? negativeColor : positiveColor,
    };
  });
};

export const getAxisPosition = (data: { value: number }[]) => {
  const maxValue = Math.max.apply(
    null,
    data.map(({ value }) => value),
  );
  const minValue = Math.min.apply(
    null,
    data.map(({ value }) => value),
  );

  if (maxValue <= 0) {
    return 'right';
  }
  if (minValue >= 0) {
    return 'left';
  }
  return 'center';
};
