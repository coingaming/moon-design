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
  cursor: 'pointer',
});

const Body = styled.div({
  paddingLeft: rem(35),
});

const Switch = styled(IconChevronRight as any)(({ open, theme }) => ({
  transform: `translateY(-50%) rotate(${open ? '90deg' : '0'})`,
  transition: `transform ${theme.transitionDuration.default}s ease`,
  position: 'absolute',
  left: 0,
  top: '50%',
  color: theme.color.trunks[100],
}));

const Toggle: React.FC<ToggleProps> = props => {
  const { header, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <ToggleWrapper>
      <Header onClick={() => setOpen(!open)}>
        <Switch open={open} />
        {header}
      </Header>
      {open && <Body>{children}</Body>}
    </ToggleWrapper>
  );
};

export default Toggle;
