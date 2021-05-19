import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@heathmont/moon-themes';
import { Inline, Stack, Heading } from '@heathmont/moon-components';

const Palette = styled.span<{ backgroundColor: string }>(
  ({ backgroundColor }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.25rem',
    backgroundColor,
    width: '4rem',
    height: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

const PaletteText = styled.span({
  display: 'block',
  borderRadius: 'inherit',
  padding: '0.25em',
  fontSize: '0.6rem',
  backgroundColor: 'rgba(255,255,255,0.75)',
  color: 'black',
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
});

const ColorPalette: React.FC<any> = ({ colors }) => {
  const reversedSubColors = Object.entries(colors).slice().reverse();

  return (
    <Inline as="ul">
      {reversedSubColors.map(([colorName, colorValue]: any) => (
        <li key={colorName}>
          <Palette backgroundColor={colorValue}>
            <PaletteText>{colorName}</PaletteText>
            <PaletteText>{colorValue}</PaletteText>
          </Palette>
        </li>
      ))}
    </Inline>
  );
};

export const ThemePalettes = () => {
  const { color } = useTheme();

  return (
    Object.entries(color)
      // we filter because we have text & background colours here as well
      // eslint-disable-next-line
      .filter(([_, colors]) => colors && typeof colors === 'object')
      .map(([colorKey, colors]) => (
          <Stack as="li" key={colorKey}>
            <Heading as="h3" size="charlie">
              {colorKey}
            </Heading>
            <ColorPalette colors={colors} />
          </Stack>
      ))
  );
};
