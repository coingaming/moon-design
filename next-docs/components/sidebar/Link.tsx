import { Chip } from '@heathmont/moon-core-tw';
import NextLink from 'next/link';
import classNames from '../../utils/classNames';

type Props = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, children, isActive }) => (
  <NextLink href={href}>
    <a>
      <Chip variant="ghost" isActive={isActive}>
        {children}
      </Chip>
    </a>
  </NextLink>
);

export default Link;
