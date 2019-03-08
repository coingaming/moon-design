/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, spacing } from '@heathmont/sportsbet-utils';
import { IconUpload } from '@heathmont/sportsbet-icons';
import { Input, inputSpacing, inputColors } from '../private/input';
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
    backgroundPosition: `right ${spacing('small')} center`,
    backgroundSize: rem(20),
    backgroundImage: inlineSVG(<IconUpload color={inputColors.label} />),
    '&:focus-within': {
      borderColor: inputColors.label,
      outline: 'none',
    },
  },
  error && {
    borderColor: colors.error,
  },
]);

const inputWithPlaceholder = css({
  paddingTop: rem(inputSpacing + 7),
  paddingBottom: rem(inputSpacing - 7),
});

const inputPlaceholder = css({
  position: 'absolute',
  left: rem(inputSpacing),
  top: '50%',
  transform: 'translateY(-90%) scale(0.75)',
  transformOrigin: 'top left',
  color: inputColors.label,
  pointerEvents: 'none',
});

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
    css={placeholder && inputWithPlaceholder}
  >
    <span>{label}</span>
    {placeholder && (
      <span css={inputPlaceholder}>
        {/* Break-up placeholder sentence from label for screenreaders */}
        <span css={hideVisually}>. </span>
        {placeholder}
      </span>
    )}
    <input type="file" css={hideVisually} {...props} />
  </FileInputElement>
);

export { FileInput, FileInputProps };
