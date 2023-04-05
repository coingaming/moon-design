import { LogoMoonDesignShort } from '@heathmont/moon-assets';
import packageInfo from '../../package.json';

const Version = () => (
  <div className="fixed bottom-0 ltr:left-0 rtl:right-0 w-80 py-6 px-8 flex text-moon-14 bg-goku gap-2 border-t border-t-beerus">
    <LogoMoonDesignShort fontSize="1.5rem" />
    <p>
      Version <span className="font-medium">{packageInfo.version}</span>
    </p>
  </div>
);

export default Version;
