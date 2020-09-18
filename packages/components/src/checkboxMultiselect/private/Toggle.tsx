import { IconChevronRight } from '@heathmont/moon-assets';
import { rem } from '@heathmont/moon-utils';
import React, { useState } from 'react';
import styled from 'styled-components';

type ToggleProps = {
  header: JSX.Element;
};

const ToggleWrapper = styled.div({
  position: 'relative',
});

const Header = styled.div({
  position: 'relative',
  paddingLeft: rem(35),
});

const Body = styled.div({
  paddingLeft: rem(35),
});

const Switch = styled.button<{ open: boolean }>(({ open, theme }) => ({
  background: 'none',
  border: 'none',
  padding: rem(2),
  transform: `translateY(-50%) rotate(${open ? '90deg' : '0'})`,
  transition: `transform ${theme.transitionDuration.default}s ease`,
  position: 'absolute',
  left: 0,
  top: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Toggle: React.FC<ToggleProps> = props => {
  const { header, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <ToggleWrapper>
      <Header>
        <Switch open={open} onClick={() => setOpen(!open)}>
          <IconChevronRight color="trunks.100" />
        </Switch>
        {header}
      </Header>
      {open && <Body>{children}</Body>}
    </ToggleWrapper>
  );
};

export default Toggle;
