import React from 'react';
import { Footer as MoonFooter, Button } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import type { FooterConfig } from '../types/RangeConfig';
import type RangeTranslations from '../types/RangeTranslations';

type FooterProps = {
  config: boolean | FooterConfig;
  apply: () => void;
  reset: () => void;
  cansel: () => void;
  translations?: RangeTranslations;
};

const Container = styled.div({
  gridArea: 'footer',
  display: 'flex',
  margin: `0 ${rem(-16)} ${rem(-12)}`,
});

const Footer: React.FC<FooterProps> = ({
  config,
  apply,
  reset,
  cansel,
  translations,
}) => {
  if (typeof config == 'object') {
    const { isApplyBtn, isCanselBtn, isClearBtn } = config as FooterConfig;
    return (
      <Container>
        <MoonFooter
          isDivider={true}
          size="small"
          primButton={
            isApplyBtn ? (
              <Button fullWidth variant="primary" size="small" onClick={apply}>
                {translations?.apply}
              </Button>
            ) : undefined
          }
          secButton={
            isCanselBtn ? (
              <Button
                fullWidth
                variant="secondary"
                size="small"
                onClick={cansel}
              >
                {translations?.cansel}
              </Button>
            ) : undefined
          }
          tertButton={
            isClearBtn ? (
              <Button fullWidth variant="ghost" size="small" onClick={reset}>
                {translations?.reset}
              </Button>
            ) : undefined
          }
        />
      </Container>
    );
  }
  if (config) {
    return (
      <Container>
        <MoonFooter
          isDivider={true}
          size="small"
          primButton={
            <Button fullWidth variant="primary" size="small" onClick={apply}>
              {translations?.apply}
            </Button>
          }
          secButton={
            <Button fullWidth variant="secondary" size="small" onClick={cansel}>
              {translations?.cansel}
            </Button>
          }
          tertButton={
            <Button fullWidth variant="ghost" size="small" onClick={reset}>
              {translations?.reset}
            </Button>
          }
        />
      </Container>
    );
  }
  return null;
};

export default Footer;
