interface GetYears {
  min?: number;
  max?: number;
}

export const getYears = ({ min = 1990, max = 2150 }: GetYears) => {
  const current = new Date().getFullYear();
  const pastYears = Array.from(new Array(current - min), (_, idx) => min + idx);
  const nextYears = Array.from(
    new Array(max - current),
    (_, idx) => current + idx
  );
  return [...pastYears, current, ...nextYears];
};
