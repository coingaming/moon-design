import { Chip } from '@heathmont/moon-core-tw';
import NextLink from 'next/link';

type Props = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, children, isActive }) => (
  <NextLink href={href}>
    <Chip as="a" variant="ghost" isActive={isActive}>
      {children}
    </Chip>
  </NextLink>
);

export default Link;
