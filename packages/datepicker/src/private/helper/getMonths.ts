export const getMonths = () =>
  [...Array(12)].map((_, i) =>
    new Date(0, i).toLocaleString('en', { month: 'long' })
  );
