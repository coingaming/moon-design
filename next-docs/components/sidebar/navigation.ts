const navigation = [
  // { name: 'Home', href: '/' },
  { name: 'Vision', href: '/vision' },
  { name: 'Getting Started', href: '/gettingStarted' },
  { name: 'How to contribute', href: '/howToContribute' },
  // { name: 'Legacy Colours Palette', href: '/coloursLegacy' },
  { name: 'Colours Palette', href: '/colours' },
  // { name: 'Legacy Tokens', href: '/tokensLegacy' },
  { name: 'Tokens', href: '/tokens' },
  { name: 'Icons', href: '/icons' },
  { name: 'Transform SVG', href: '/transformIcon' },
  { name: 'Manifest', href: '/manifest' },
  {
    name: 'Core',
    children: [
      { name: 'Button', href: '/core/button' },
      { name: 'Loader', href: '/core/loader' },
      { name: 'Chip', href: '/core/chip' },
      { name: 'Checkbox', href: '/core/checkbox' },
      { name: 'Typography', href: '/core/typography' },
    ],
  },
  {
    name: 'Components',
    children: [
      { name: 'Accordion', href: '/components/accordion' },
      { name: 'Avatar', href: '/components/avatar' },
      { name: 'AuthCode', href: '/components/authCode' },
      { name: 'Banner', href: '/components/banner' },
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
      {
        name: 'Datepicker',
        children: [
          { name: 'Single Date', href: '/components/datepicker' },
          { name: 'Range', href: '/components/datepickerRange' },
        ],
      },
      {
        name: 'Dialog',
        children: [
          { name: 'Dialog', href: '/components/dialog/dialog' },
          { name: 'Dialog Content', href: '/components/dialog/dialogContent' },
          { name: 'Dialog Overlay', href: '/components/dialog/dialogOverlay' },
          { name: 'Dialog Header', href: '/components/dialog/header' },
          { name: 'Dialog Footer', href: '/components/dialog/footer' },
          { name: 'Popover', href: '/components/popover' },
        ],
      },
      { name: 'Label', href: '/components/label' },
      { name: 'List Item', href: '/components/listItem' },
      { name: 'Loader', href: '/components/loader' },
      { name: 'Pagination', href: '/components/pagination' },
      {
        name: 'Progress',
        children: [
          { name: 'Circular', href: '/components/progress/circular' },
          { name: 'Linear', href: '/components/progress/linear' },
        ],
      },
      { name: 'RadioButton', href: '/components/radiobutton/radiobutton' },
      { name: 'Search', href: '/components/search' },
      {
        name: 'Select',
        children: [
          { name: 'Select', href: '/components/select/select' },
          {
            name: 'Single Select',
            href: '/components/select/singleSelect',
          },
          {
            name: 'Multi Select',
            href: '/components/select/multiSelect',
          },
          // {
          //   name: 'Single Select (react)',
          //   href: '/components/select/singleReactSelect',
          // },
          // {
          //   name: 'Multi Select (react)',
          //   href: '/components/select/multiReactSelect',
          // },
        ],
      },
      // { name: 'Sidebar', href: '/components/sidebar' }, // Uncomment only if you want to check how it looks
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Table', href: '/components/table/table' },
      {
        name: 'TextInput',
        children: [
          { name: 'Text', href: '/components/textInput/text' },
          { name: 'Number', href: '/components/textInput/number' },
          { name: 'Date', href: '/components/textInput/date' },
          { name: 'Time', href: '/components/textInput/time' },
          { name: 'Date Time', href: '/components/textInput/dateTime' },
          { name: 'Email', href: '/components/textInput/email' },
          { name: 'Password', href: '/components/textInput/password' },
          { name: 'Search', href: '/components/textInput/search' },
          { name: 'Telephone', href: '/components/textInput/telephone' },
          { name: 'Url', href: '/components/textInput/url' },
        ],
      },
      { name: 'TextInput Group', href: '/components/textInputGroup' },
      { name: 'Tooltip', href: '/components/tooltip' },
      {
        name: 'Typography',
        children: [
          { name: 'Caption', href: '/components/typography/caption' },
          { name: 'Heading', href: '/components/typography/heading' },
          { name: 'Text', href: '/components/typography/text' },
        ],
      },
    ],
  },
];

export default navigation;
