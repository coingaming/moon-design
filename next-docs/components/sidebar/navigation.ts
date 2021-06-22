const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Getting Started',
    href: '/start/getting-started',
    children: [{ name: 'Global Reset', href: '/start/reset' }],
  },
  {
    name: 'Components',
    children: [
      { name: 'Avatar', href: '/components/avatar' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Button', href: '/components/button' },
      { name: 'Carousel', href: '/components/carousel' },
      { name: 'Charts', href: '/components/charts' },
    ],
  },
  {
    name: 'Atomic',
    children: [{ name: 'Button', href: '/atomic/button' }],
  },
];

export default navigation;
