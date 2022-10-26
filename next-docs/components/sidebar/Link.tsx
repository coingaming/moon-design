import { MenuItem } from '@heathmont/moon-core-tw';
import NextLink from 'next/link';

type Props = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, children, isActive }) => (
  <NextLink href={href} passHref>
    <MenuItem as="a" isActive={isActive}>
      {children}
    </MenuItem>
  </NextLink>
);

export default Link;
