/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG } from '@heathmont/sportsbet-utils';
import { IconUpload } from '@heathmont/sportsbet-icons';
import { Input, inputColors } from '../private/input';
import {
  inputFloatContent,
  inputFloatLabel,
  inputFloatLabelActive,
} from '../private/input/mixins';
jsx;

/**
 * Types & Settings
 */
type FileInputProps = {
  label?: string;
  placeholder?: string;
  error?: boolean;
};

/**
 * Styles
 *
 * Styling <input type='file'/> is tricky. The `label` acts as the main
 * interaction, with the input visually hidden from the user.
 */
const FileInputElement = styled(Input.withComponent('label'))(({ error }) => [
  {
    position: 'relative',
    display: 'block',
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
  placeholder,
  label = 'Choose file',
  error,
  ...props
}) => (
  <FileInputElement
    withIcon
    error={error}
    css={placeholder && inputFloatContent}
  >
    <span>{label}</span>
    {placeholder && (
      <span css={[inputFloatLabel, inputFloatLabelActive]}>
        {/* Break-up placeholder sentence from label for screenreaders */}
        <span css={hideVisually}>. </span>
        {placeholder}
      </span>
    )}
    <input type="file" css={hideVisually} {...props} />
  </FileInputElement>
);

export { FileInput, FileInputProps };
