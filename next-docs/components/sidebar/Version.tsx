import { LogoMoonDesignShort } from '@heathmont/assets/styled';
import packageInfo from '../../package.json';

const Version = () => (
  <div className="flex text-moon-14 text-trunks gap-2">
    <LogoMoonDesignShort fontSize="1.5rem" />
    <p>
      Version <span className="font-medium">{packageInfo.version}</span>
    </p>
  </div>
);

export default Version;
