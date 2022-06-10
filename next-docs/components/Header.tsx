import { LogoMoonDesignShort } from '@heathmont/moon-assets';
import { GenericMenu } from '@heathmont/moon-icons-tw';
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
      <LogoMoonDesignShort fontSize="2rem" />
    </div>
    <div className="relative z-10 hidden lg:block">
      <Breadcrumbs />
    </div>
  </header>
);

export default Header;
