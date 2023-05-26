import { MenuItem } from '@heathmont/moon-core-tw';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Link: React.FC<Props> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <MenuItem
        as="a"
        isActive={isActive}
        onClick={onClick}
        className="justify-start"
      >
        {children}
      </MenuItem>
    </NextLink>
  );
};

export default Link;
