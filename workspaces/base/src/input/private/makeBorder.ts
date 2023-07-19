const makeBorder = (
  isSideBorderHidden?: boolean,
  isTopBottomBorderHidden?: boolean,
  isFirst?: boolean,
  isRtl?: boolean,
  error?: boolean
) => {
  if (error) return '';
  if (isSideBorderHidden) {
    if (isRtl) {
      return isFirst ? 'input-lsb-hidden' : 'input-rsb-hidden';
    }
    return isFirst ? 'input-rsb-hidden' : 'input-lsb-hidden';
  } else if (isTopBottomBorderHidden) {
    return isFirst ? 'input-bbb-hidden' : 'input-tbb-hidden';
  }
  return '';
};

export default makeBorder;
