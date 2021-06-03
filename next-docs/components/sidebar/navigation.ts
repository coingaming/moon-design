const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Getting Started',
    href: '/start/getting-started',
    children: [{ name: 'Global Reset', href: '/start/reset' }],
  },
  {
    name: 'React',
    children: [
      { name: 'Badge', href: '/react/badge' },
      { name: 'Button', href: '/react/button' },
      { name: 'Avatar', href: '/react/avatar' },
    ],
  },
  {
    name: 'Atomic',
    children: [{ name: 'Button', href: '/atomic/button' }],
  },
];

export default navigation;
