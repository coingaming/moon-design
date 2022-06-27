export const determineMenuBackgroundColor = (index: number, hoveredIndex: number, selectedIndex: number) => {
  const selectedClass = 'bg-goku';
  let bgClass = '';
  // No menu item is selected, so first item should have background color
  if (hoveredIndex < 0 && selectedIndex < 0 && index === 0) bgClass = selectedClass;
  else if (hoveredIndex === index || selectedIndex === index) bgClass = selectedClass;

  return bgClass;
};
