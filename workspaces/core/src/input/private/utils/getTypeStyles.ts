import type InputProps from '../types/InputProps';

const getTypeStyles = (type?: InputProps['type']): string | undefined => {
  switch (type) {
    case 'number':
      return 'input-number-clear';
    case 'date':
      return 'ltr:input-d rtl:input-d-rtl';
    case 'time':
      return 'ltr:input-t rtl:input-t-rtl';
    case 'datetime-local':
      return 'ltr:input-d rtl:input-dt-local-rtl';
    default:
      return;
  }
};

export default getTypeStyles;
