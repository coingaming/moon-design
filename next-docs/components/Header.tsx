import { LogoMoonDesignShort } from '@heathmont/moon-assets';
import { GenericMenu } from '@heathmont/moon-icons-tw';
import Link from 'next/link';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

type Props = {
  openSidebar: () => void;
};

const Header: React.FC<Props> = ({ openSidebar }) => (
  <header>
    <div className="relative z-10 py-4 lg:hidden flex flex-row gap-2 items-center justify-between text-bulma">
      <button
        type="button"
        className="focus:outline-none"
        onClick={openSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <GenericMenu className="text-moon-32" />
      </button>
      <Link href="/">
        <a>
          <LogoMoonDesignShort fontSize="2rem" />
        </a>
      </Link>
    </div>
    <Breadcrumbs />
  </header>
);

export default Header;
