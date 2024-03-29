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
  cancel: () => void;
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
  cancel,
  translations,
}) => {
  if (typeof config == 'object') {
    const { isApplyBtn, isCancelBtn, isClearBtn } = config as FooterConfig;
    return (
      <Container test-id="footer">
        <MoonFooter
          isDivider={true}
          size="small"
          primButton={
            isApplyBtn ? (
              <Button
                fullWidth
                variant="primary"
                size="small"
                onClick={apply}
                test-id="apply"
              >
                {translations?.apply}
              </Button>
            ) : undefined
          }
          secButton={
            isCancelBtn ? (
              <Button
                fullWidth
                variant="secondary"
                size="small"
                onClick={cancel}
                test-id="cancel"
              >
                {translations?.cancel}
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
            <Button fullWidth variant="secondary" size="small" onClick={cancel}>
              {translations?.cancel}
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
