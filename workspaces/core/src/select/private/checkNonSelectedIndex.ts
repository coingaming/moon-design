const checkNonSelectedIndex = (index: number, length: number, selectedIndexes: number[], direction: 'up' | 'down'): number => {
  const nonSelectedIndexes: number[] = [];
  let closestNonSelectedIndex = 9999;
  let value = index;
  // Array of selected indexes is empty or doesn't contain provided index
  if (!selectedIndexes?.length || !selectedIndexes?.includes(index)) return value;

  for (let i = length; i >= 0; i--) {
    // We are looking for number that's not in selectedIndexes array
    if (!selectedIndexes?.includes(i)) {
      nonSelectedIndexes.push(i);
      // We are looking for closest number higher than provided index
      if (direction === 'down' && i > index && i - index < closestNonSelectedIndex - index) closestNonSelectedIndex = i;
      // We are looking for closest number lower than provided index
      else if (direction === 'up' && i < index && index - i < closestNonSelectedIndex - index) closestNonSelectedIndex = i;
    }
  }
  // When closest non selected number isn't found we set the lowest non-selected number
  if (direction === 'down' && closestNonSelectedIndex === 9999) closestNonSelectedIndex = Math.min(...nonSelectedIndexes);
  // When closest non selected number isn't found we set the highest non-selected number
  if (direction === 'up' && closestNonSelectedIndex === 9999) closestNonSelectedIndex = Math.max(...nonSelectedIndexes);

  value = closestNonSelectedIndex;

  return value;
};

export default checkNonSelectedIndex;
