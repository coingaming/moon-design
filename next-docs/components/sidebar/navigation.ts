const navigation = [
  // { name: 'Home', href: '/' },
  { name: 'Colours Palette', href: '/colours' },
  { name: 'Typography', href: '/typography' },
  {
    name: 'Getting Started',
    href: '/start/getting-started',
    children: [{ name: 'Reset', href: '/start/reset' }],
  },
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
          // { name: 'Line', href: '/components/charts/lineChart' }, // TODO
          // { name: 'Pie', href: '/components/charts/pieChart' }, // TODO
          // { name: 'Table', href: '/components/charts/tableChart' }, // TODO
          // { name: 'Vertical bar', href: '/components/charts/verticalBarChart' }, // TODO
        ],
      },
      { name: 'Checkbox', href: '/components/checkbox' },
      { name: 'Datepicker', href: '/components/datepicker' },
      {
        name: 'Dialog',
        children: [
          { name: 'Dialog', href: '/components/dialog/dialog' }, // TODO code
          { name: 'Dialog Content', href: '/components/dialog/dialogContent' }, // TODO code
          { name: 'Dialog Overlay', href: '/components/dialog/dialogOverlay' }, // TODO code
        ],
      },
      // Dropdown
      { name: 'Loader', href: '/components/loader' },
      { name: 'Pagination', href: '/components/pagination' }, // TODO
      {
        name: 'Progress',
        children: [
          { name: 'Circular', href: '/components/progress/circular' },
          { name: 'Linear', href: '/components/progress/linear' },
        ],
      },
      { name: 'Search', href: '/components/search' }, // TODO
      { name: 'Select', href: '/components/select' },
      // { name: 'Tabs', href: '/components/tabs' }, // TODO
      // {
      //   name: 'Table',
      //   children: [
      //     { name: 'Table', href: '/components/table/table' }, // TODO
      //   ],
      // },
      // { name: 'TextInput', href: '/components/textInput' }, // TODO
      // { name: 'Toggle', href: '/components/toggle' }, // TODO
      // { name: 'Tooltip', href: '/components/tooltip' }, // TODO
    ],
  },
  // {
  //   name: 'Atomic',
  //   children: [{ name: 'Button', href: '/atomic/button' }],
  // },
];

export default navigation;
