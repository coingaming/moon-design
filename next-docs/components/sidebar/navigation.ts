import getComponent from '../getComponent';

const navigation = [
  { name: 'Vision', href: '/vision' },
  { name: 'Getting Started', href: '/gettingStarted' },
  { name: 'How to contribute', href: '/howToContribute' },
  { name: 'Colours', href: '/colours' },
  { name: 'Tokens', href: '/tokens' },
  { name: 'Typography', href: '/typography' },
  { name: 'Components', href: '/components' },
  { name: 'Transform SVG', href: '/transformSvg' },
  { name: 'Manifest', href: '/manifest' },
  {
    name: 'Tailwind',
    children: [
      getComponent('Accordion'),
      getComponent('Alert'),
      getComponent('AuthCode'),
      getComponent('Avatar'),
      getComponent('BottomSheet'),
      getComponent('Breadcrumb'),
      {
        name: 'Button',
        children: [getComponent('Button'), getComponent('IconButton')],
      },
      getComponent('Carousel'),
      getComponent('Checkbox'),
      getComponent('Chip'),
      getComponent('Drawer'),
      getComponent('Dropdown'),
      getComponent('Form'),
      getComponent('Icons'),
      {
        name: 'Input',
        children: [
          getComponent('Input'),
          getComponent('InsetInput'),
          getComponent('Group'),
        ],
      },
      getComponent('Loader'),
      getComponent('MenuItem'),
      getComponent('Modal'),
      getComponent('Pagination'),
      getComponent('Popover'),
      {
        name: 'Progress',
        children: [getComponent('CircularProgress'), getComponent('Progress')],
      },
      getComponent('Radio'),
      getComponent('Search'),
      getComponent('Snackbar'),
      getComponent('Switch'),
      getComponent('Table'),
      getComponent('Tabs'),
      getComponent('Tag'),
      getComponent('Textarea'),
      getComponent('Tooltip'),
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
