const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'xl':
      return 'rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
    case 'lg':
      return 'rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
    case 'sm':
      return 'rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs rtl:invalid:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs ltr:invalid:rounded-moon-i-xs';
    default:
      return 'rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:[&:not([readonly])]:hover:rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs rtl:invalid:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs ltr:invalid:rounded-moon-i-xs';
  }
};

export default getSizeStyles;
