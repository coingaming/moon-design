import NextLink from 'next/link';
import Logo from './Logo';

const LogoLink = () => (
  <NextLink href="/">
    <a>
      <Logo />
    </a>
  </NextLink>
);

export default LogoLink;
