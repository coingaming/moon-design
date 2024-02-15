import type InputProps from '../types/InputProps';

const getTypeStyles = (type?: InputProps['type']): string | undefined => {
  switch (type) {
    case 'number':
      return 'input-number-clear';
    case 'date':
      return 'ltr:input-d rtl:input-d-rtl [&::-webkit-datetime-edit]:text-trunks';
    case 'time':
      return 'ltr:input-t rtl:input-t-rtl [&::-webkit-datetime-edit]:text-trunks';
    case 'datetime-local':
      return 'ltr:input-d rtl:input-dt-local-rtl [&::-webkit-datetime-edit]:text-trunks';
    default:
      return;
  }
};

export default getTypeStyles;
