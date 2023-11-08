import type Position from '../types/Position';

const getPosition = (position?: Position): string => {
  switch (position) {
    case 'top-left':
      return 'top-4 start-4 ltr:radix-state-open:animate-toast-slide-in-left rtl:radix-state-open:animate-toast-slide-in-right';
    case 'top-center':
      return 'justify-center top-4 inset-x-4 md:m-auto radix-state-open:animate-toast-slide-in-up';
    case 'top-right':
      return 'justify-end top-4 end-4 ltr:radix-state-open:animate-toast-slide-in-right rtl:radix-state-open:animate-toast-slide-in-left';
    case 'bottom-left':
      return 'bottom-4 start-4 ltr:radix-state-open:animate-toast-slide-in-left rtl:radix-state-open:animate-toast-slide-in-right';
    case 'bottom-center':
      return 'justify-center bottom-4 inset-x-4 m-auto radix-state-open:animate-toast-slide-in-down';
    case 'bottom-right':
      return 'justify-end bottom-4 end-4 ltr:radix-state-open:animate-toast-slide-in-right rtl:radix-state-open:animate-toast-slide-in-left';
    default:
      return '';
  }
};

export default getPosition;
