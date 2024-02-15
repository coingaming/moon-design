import { LogoMoonDesignShort } from '@heathmont/moon-assets';
import packageInfo from '../../package.json';

const Version = () => (
  <div className="flex text-moon-14 gap-2">
    <LogoMoonDesignShort fontSize="1.5rem" />
    <p>
      Version <span className="font-medium">{packageInfo.version}</span>
    </p>
  </div>
);

export default Version;
