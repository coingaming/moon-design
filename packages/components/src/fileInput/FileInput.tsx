import React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { inlineSvg, rem } from '@heathmont/moon-utils';

import { Input } from '../private/input/input';
import { inputColors } from '../private/input/settings';
import IconUpload from '../private/icons/IconUpload';

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
const FileInputLabel = styled.span(({ theme }) => ({
  display: 'block',
  fontSize: rem(16),
  color: inputColors('label')(theme),
  marginBottom: rem(theme.space.small),
}));

const FileInputElement = styled(Input.withComponent('label'))(
  ({ error, theme }) => [
    {
      width: 'auto',
      position: 'relative',
      display: 'block',
      color: inputColors('label')(theme),
      cursor: 'pointer',
      backgroundImage: inlineSvg(
        <IconUpload color={inputColors('label')(theme)} />
      ),
      '&:focus-within': {
        borderColor: inputColors('label')(theme),
      },
    },
    error && {
      borderColor: theme.color.chiChi[100],
    },
  ]
);

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
        style={hideVisually()}
        {...props}
      />
    </FileInputElement>
  </React.Fragment>
);

export type { FileInputProps };

export default FileInput;
