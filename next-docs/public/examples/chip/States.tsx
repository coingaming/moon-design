import { Chip } from '@heathmont/moon-core-tw';
import { useCallback, useState } from 'react';

const Example = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = useCallback(() => {
    setIsActive(!isActive)
  }, [setIsActive, isActive])

  return <Chip
    onClick={onClick}
    isActive={isActive}
    isStroke
  >
    Chip
  </Chip>
};

export default Example;
