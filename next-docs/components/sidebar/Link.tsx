import { MenuItem } from '@heathmont/moon-core-tw';
import NextLink from 'next/link';

type Props = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Link: React.FC<Props> = ({ href, children, isActive, onClick }) => (
  <NextLink href={href} passHref>
    <MenuItem as="a" isActive={isActive} onClick={onClick}>
      {children}
    </MenuItem>
  </NextLink>
);

export default Link;
