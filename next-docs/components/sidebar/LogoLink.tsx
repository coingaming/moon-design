import NextLink from 'next/link';
import Logo from './Logo';

const LogoLink = ({ onClick }: { onClick: () => void }) => (
  <NextLink href="/" onClick={onClick} className="outline-none">
    <Logo />
  </NextLink>
);

export default LogoLink;
