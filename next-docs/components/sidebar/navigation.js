import {
  OtherRocket,
  OtherLifebuoy,
  SoftwarePuzzle,
  SoftwarePlate,
  GenericLoyalty,
  GenericPicture,
  SoftwareSettings,
  TextSize,
  GenericTrophy,
} from '@heathmont/moon-icons-tw';

const navigation = [
  {
    name: 'Vision',
    href: '/vision',
    icon: <GenericLoyalty className="text-moon-24" />,
  },
  {
    name: 'Getting Started',
    href: '/gettingStarted',
    icon: <OtherRocket className="text-moon-24" />,
  },
  {
    name: 'How to contribute',
    href: '/howToContribute',
    icon: <OtherLifebuoy className="text-moon-24" />,
  },
  {
    name: 'Colours',
    href: '/colours',
    icon: <SoftwareSettings className="text-moon-24" />,
  },
  {
    name: 'Tokens',
    href: '/tokens',
    icon: <SoftwarePuzzle className="text-moon-24" />,
  },
  {
    name: 'Typography',
    href: '/typography',
    icon: <TextSize className="text-moon-24" />,
  },
  {
    name: 'Components',
    href: '/components',
    icon: <SoftwarePlate className="text-moon-24" />,
  },
  {
    name: 'Transform SVG',
    href: '/transformSvg',
    icon: <GenericPicture className="text-moon-24" />,
  },
  {
    name: 'Manifest',
    href: '/manifest',
    icon: <GenericTrophy className="text-moon-24" />,
  },
];

export default navigation;
