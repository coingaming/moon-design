const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'xl':
      return 'h-14 leading-[3.5rem] rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
    case 'lg':
      return 'h-12 leading-[3rem] rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
    case 'sm':
      return 'h-8 leading-8 rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs rtl:invalid:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs ltr:invalid:rounded-moon-i-xs';
    default:
      return 'h-10 leading-10 rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
  }
};

export default getSizeStyles;
