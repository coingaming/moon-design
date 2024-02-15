import type InputProps from '../types/InputProps';

const getMaxDate = (type?: InputProps['type']): string | undefined => {
  switch (type) {
    case 'date':
      return '9999-12-31';
    case 'datetime-local':
      return '9999-12-31T23:59';
    default:
      return;
  }
};

export default getMaxDate;
