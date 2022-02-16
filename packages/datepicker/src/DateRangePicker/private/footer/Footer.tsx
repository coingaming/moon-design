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
  translations: RangeTranslations;
};

const Container = styled.div(({ theme }) => ({
  gridArea: 'footer',
  display: 'flex',
  margin: `0 ${rem(-16)}`,
}));

const Footer: React.FC<FooterProps> = ({
  config,
  apply,
  reset,
  translations,
}) => {
  console.log('Footer');
  return (
    <Container>
      <MoonFooter
        isDivider={true}
        primButton={
          <Button fullWidth variant="primary" size="small" onClick={apply}>
            {translations.apply}
          </Button>
        }
        secButton={
          <Button fullWidth variant="secondary" size="small">
            {translations.cansel}
          </Button>
        }
        tertButton={
          <Button fullWidth variant="ghost" size="small" onClick={reset}>
            {translations.reset}
          </Button>
        }
      />
    </Container>
  );
};

export default Footer;

{
  /* <Button
          variant="primary"
          type="button"
          onClick={apply}
          // disabled={!!hasStartDateError || !!hasEndDateError}
        >
          {translations.apply}
        </Button> */
}
