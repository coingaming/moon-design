const navigation = [
  // { name: 'Home', href: '/' },
  { name: 'Vision', href: '/vision' },
  { name: 'Getting Started', href: '/gettingStarted' },
  { name: 'Set up Moon-tw', href: '/setUpMoonTw' },
  { name: 'How to contribute', href: '/howToContribute' },
  // { name: 'Legacy Colours Palette', href: '/coloursLegacy' },
  { name: 'Colours Palette', href: '/colours' },
  // { name: 'Legacy Tokens', href: '/tokensLegacy' },
  { name: 'Tokens', href: '/tokens' },
  { name: 'Transform SVG', href: '/transformIcon' },
  { name: 'Manifest', href: '/manifest' },
  {
    name: 'Tailwind',
    children: [
      { name: 'Accordion', href: '/core/accordion' },
      { name: 'Avatar', href: '/core/avatar' },
      { name: 'Breadcrumb', href: '/core/breadcrumb' },
      { name: 'Button', href: '/core/button' },
      { name: 'Checkbox', href: '/core/checkbox' },
      { name: 'Chip', href: '/core/chip' },
      { name: 'Icons', href: '/core/icons' },
      { name: 'Label', href: '/core/label' },
      { name: 'Loader', href: '/core/loader' },
      { name: 'Table', href: '/core/table' },
      { name: 'TextInput', href: '/core/textInput' },
      { name: 'TextInput Group', href: '/core/textInputGroup' },
      { name: 'Typography', href: '/core/typography' },
      { name: 'Radio button', href: '/core/radiobutton' },
    ],
  },
  {
    name: 'Styled Components',
    children: [
      { name: 'Accordion', href: '/components/accordion' },
      { name: 'AuthCode', href: '/components/authCode' },
      { name: 'Avatar', href: '/components/avatar' },
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
          { name: 'Range', href: '/components/datepickerRange' },
          { name: 'Single Date', href: '/components/datepicker' },
        ],
      },
      {
        name: 'Dialog',
        children: [
          { name: 'Dialog Content', href: '/components/dialog/dialogContent' },
          { name: 'Dialog Footer', href: '/components/dialog/footer' },
          { name: 'Dialog Header', href: '/components/dialog/header' },
          { name: 'Dialog Overlay', href: '/components/dialog/dialogOverlay' },
          { name: 'Dialog', href: '/components/dialog/dialog' },
          { name: 'Popover', href: '/components/popover' },
        ],
      },
      { name: 'Icons', href: '/components/icons' },
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
      { name: 'RadioButton', href: '/components/radiobutton' },
      { name: 'Search', href: '/components/search' },
      {
        name: 'Select',
        children: [
          {
            name: 'Multi Select',
            href: '/components/select/multiSelect',
          },
          { name: 'Select', href: '/components/select/select' },
          {
            name: 'Single Select',
            href: '/components/select/singleSelect',
          },
        ],
      },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Table', href: '/components/table' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'TextInput Group', href: '/components/textInputGroup' },
      {
        name: 'TextInput',
        children: [
          { name: 'Date Time', href: '/components/textInput/dateTime' },
          { name: 'Date', href: '/components/textInput/date' },
          { name: 'Email', href: '/components/textInput/email' },
          { name: 'Number', href: '/components/textInput/number' },
          { name: 'Password', href: '/components/textInput/password' },
          { name: 'Search', href: '/components/textInput/search' },
          { name: 'Telephone', href: '/components/textInput/telephone' },
          { name: 'Text', href: '/components/textInput/text' },
          { name: 'Time', href: '/components/textInput/time' },
          { name: 'Url', href: '/components/textInput/url' },
        ],
      },
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
