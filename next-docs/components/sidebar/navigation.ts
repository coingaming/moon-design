const navigation = [
  // { name: 'Home', href: '/' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'How to contribute', href: '/how-to-contribute' },
  { name: 'Colours Palette', href: '/colours' },
  { name: 'Typography', href: '/typography' },
  { name: 'Tokens', href: '/tokens' },
  { name: 'Icons', href: '/icons' },
  {
    name: 'Components',
    children: [
      { name: 'Accordion', href: '/components/accordion' },
      { name: 'Avatar', href: '/components/avatar' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Button', href: '/components/button' },
      { name: 'Carousel', href: '/components/carousel' },
      {
        name: 'Charts',
        children: [
          { name: 'Geo map', href: '/components/charts/geoMapChart' },
          { name: 'Line', href: '/components/charts/lineChart' },
          { name: 'Pie', href: '/components/charts/pieChart' },
          { name: 'Table', href: '/components/charts/tableChart' },
          { name: 'Vertical bar', href: '/components/charts/verticalBarChart' },
        ],
      },
      { name: 'Checkbox', href: '/components/checkbox' },
      { name: 'Chip', href: '/components/chip' },
      { name: 'Datepicker', href: '/components/datepicker' },
      {
        name: 'Dialog',
        children: [
          { name: 'Dialog', href: '/components/dialog/dialog' }, // TODO code
          { name: 'Dialog Content', href: '/components/dialog/dialogContent' }, // TODO code
          { name: 'Dialog Overlay', href: '/components/dialog/dialogOverlay' }, // TODO code
          { name: 'Dialog Header', href: '/components/dialog/header' },
          { name: 'Dialog Footer', href: '/components/dialog/footer' },
        ],
      },
      // Dropdown
      { name: 'Label', href: '/components/label' },
      { name: 'Loader', href: '/components/loader' },
      { name: 'Pagination', href: '/components/pagination' }, // TODO
      {
        name: 'Progress',
        children: [
          { name: 'Circular', href: '/components/progress/circular' },
          { name: 'Linear', href: '/components/progress/linear' },
        ],
      },
      {
        name: 'RadioButton',
        children: [
          { name: 'RadioButton', href: '/components/radiobutton/radiobutton' },
          {
            name: 'RadioButton API',
            href: '/components/radiobutton/radiobutton-api',
          },
        ],
      },
      { name: 'Search', href: '/components/search' },
      {
        name: 'Select',
        children: [
          { name: 'Select', href: '/components/select/select' },
          {
            name: 'Single Select',
            href: '/components/select/singleSelect',
          },
        ],
      },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tabs', href: '/components/tabs' },
      {
        name: 'Table',
        children: [
          { name: 'Table', href: '/components/table/table' },
        ],
      },
      { name: 'TextInput', href: '/components/textInput' },
      { name: 'Tooltip', href: '/components/tooltip' },
    ],
  },
];

export default navigation;
