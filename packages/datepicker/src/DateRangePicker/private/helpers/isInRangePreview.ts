import isWithinInterval from 'date-fns/isWithinInterval';
import compareAsc from 'date-fns/compareAsc';

interface isInRangePreviewInrerface {
  startDate?: Date;
  hoveredDate?: Date;
  day: Date;
}

export const isInRangePreview = ({
  startDate,
  hoveredDate,
  day,
}: isInRangePreviewInrerface) => {
  if (!startDate) {
    return false;
  }
  if (!hoveredDate) {
    return false;
  }
  const isHoveredAfter = compareAsc(hoveredDate, startDate) > 0;
  if (isHoveredAfter) {
    return isWithinInterval(day, {
      start: startDate,
      end: hoveredDate,
    });
  }
  return isWithinInterval(day, {
    start: hoveredDate,
    end: startDate,
  });
};
