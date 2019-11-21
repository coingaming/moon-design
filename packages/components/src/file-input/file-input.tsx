import * as React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, rem, spacing } from '@heathmont/sportsbet-utils';
import { IconUpload } from '@heathmont/sportsbet-assets';

import { Input } from '../private/input/input';
import { inputColors } from '../private/input/settings';

/**
 * Types & Settings
 */
type FileInputID = string;

type FileInputProps = {
  label?: string;
  placeholder?: string;
  error?: boolean;
  id: FileInputID;
};

const labelID = (id: FileInputID) => `${id}-label`;

/**
 * Styles
 *
 * Styling <input type='file'/> is tricky. The `label` acts as the main
 * interaction, with the input visually hidden from the user.
 */
const FileInputLabel = styled.span({
  display: 'block',
  fontSize: rem(16),
  color: inputColors.label,
  marginBottom: spacing('small'),
});

const FileInputElement = styled(Input.withComponent('label'))(({ error }) => [
  {
    width: 'auto',
    position: 'relative',
    display: 'block',
    color: inputColors.label,
    cursor: 'pointer',
    backgroundImage: inlineSVG(<IconUpload color={inputColors.label} />),
    '&:focus-within': {
      borderColor: inputColors.label,
    },
  },
  error && {
    borderColor: colors.error,
  },
]);

/**
 * Component
 */
const FileInput: React.FC<FileInputProps> = ({
  placeholder = 'Choose file…',
  label,
  error,
  id,
  ...props
}) => (
  <React.Fragment>
    <FileInputLabel id={labelID(id)}>{label}</FileInputLabel>
    <FileInputElement withIcon error={error}>
      <span>{placeholder}</span>
      <input
        id={id}
        type="file"
        aria-describedby={labelID(id)}
        css={hideVisually()}
        {...props}
      />
    </FileInputElement>
  </React.Fragment>
);

export { FileInput, FileInputProps };
