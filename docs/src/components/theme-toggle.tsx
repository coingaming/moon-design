import * as React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { Switch } from '@heathmont/moon-components';

import { useDocsTheme } from '../provider';

const SwitchContainer = styled.div(({ theme: { space } }) => ({
  position: 'absolute',
  top: rem(space.default),
  right: rem(space.default),
}));

export const ThemeToggle = () => {
  const { toggleColorScheme } = useDocsTheme();
  const [state, setState] = React.useState(true);

  const handleChange = (e: any) => {
    setState(e.target.checked);
    toggleColorScheme();
  };

  return (
    <SwitchContainer>
      <Switch
        onChange={e => handleChange(e)}
        checked={state}
        colorScheme
        captionUnchecked="AM"
        captionChecked="PM"
      />
    </SwitchContainer>
  );
};
