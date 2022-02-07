import React from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons';
import styled from 'styled-components';
import Loader from '../../../loader/Loader';
import type { ButtonProps } from '../../Button';

const Container = styled.div({
  position: 'relative',
  height: '100%',
  pointerEvents: 'none',
});

const Absolute = styled.div({
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignContent: 'center',
  justifyContent: 'center',
});

const HiddenContent = styled.div({
  opacity: 0,
});

const AnimationContent: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  iconOnly,
  animation,
}) => (
  <Container>
    <Absolute>
      {animation === 'progress' && <Loader color="currentColor" />}
      {animation === 'success' && <GenericCheckAlternative />}
    </Absolute>
    <HiddenContent>
      {iconLeft}
      {children}
      {iconRight}
      {iconOnly}
    </HiddenContent>
  </Container>
);

export default AnimationContent;
