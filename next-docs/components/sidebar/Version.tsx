import { Text } from '@heathmont/moon-core';
import packageInfo from '../../package.json';

const Version = () => (
  <div className="mt-4 px-3 py-2">
    <Text size={14} color="trunks.100">
      Moon.io version:
    </Text>
    <Text size={14} color="trunks.100">
      {packageInfo.version}
    </Text>
  </div>
);

export default Version;
