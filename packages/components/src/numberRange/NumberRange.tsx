import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import TextInput from '../textInput/TextInput';
import Text from '../text/Text';
import Stack from '../stack/Stack';

type Value = {
  lte: number;
  gte: number;
};

type Props = {
  value: Value;
  onChange: (value: Value) => void;
  text: string;
  lteLabel: string;
  lteDisabled: boolean;
  lteError?: boolean | string;

  gteLabel: string;
  gteDisabled: boolean;
  gteError?: boolean | string;
  maxWidth?: string | number;
};

const Container = styled.div(
  ({
    theme: {
      color, space, radius, boxShadow,
    },
  }) => ({
    background: color.gohan[100],
    padding: rem(space.default),
    borderRadius: rem(radius.default),
    boxShadow,
    '& > :first-child': {
      marginBottom: rem(12),
    },
  }),
);

const NumberRange: React.FC<Props> = ({
  text = 'Enter a minimum, maximum or range limit',
  lteLabel = 'Max',
  gteLabel = 'Min',
  lteError = false,
  gteError = false,
  lteDisabled = false,
  gteDisabled = false,
  value,
  onChange,
  maxWidth = 248,
}) => (
    <Container style={{ maxWidth }}>
      <Text color="trunks.100" size={12}>
        {text}
      </Text>
      <Stack>
        <TextInput
          type="number"
          label={gteLabel}
          value={String(value.gte)}
          disabled={gteDisabled}
          onChange={(e) =>
            onChange({
              gte: Number(e.target.value),
              lte: value.lte,
            })
          }
          error={gteError}
        />
        <TextInput
          type="number"
          label={lteLabel}
          value={String(value.lte)}
          disabled={lteDisabled}
          onChange={(e) =>
            onChange({
              lte: Number(e.target.value),
              gte: value.gte,
            })
          }
          error={lteError}
        />
      </Stack>
    </Container>
);

export default NumberRange;
