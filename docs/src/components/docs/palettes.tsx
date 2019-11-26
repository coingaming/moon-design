import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '@heathmont/sportsbet-themes';
import { Inline, Stack, Heading } from '@heathmont/sportsbet-components';

const Palette = styled.span<{ backgroundColor: string }>(
  ({ backgroundColor }) => ({
    display: 'flex',
    borderRadius: '0.25rem',
    backgroundColor,
    width: '4rem',
    height: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
  })
);

const PaletteText = styled.span({
  borderRadius: 'inherit',
  padding: '0.25em',
  fontSize: '0.6rem',
  backgroundColor: 'rgba(255,255,255,0.75)',
  color: 'black',
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
});

export const ThemePalettes = () => {
  const { color } = useTheme();

  return (
    <Stack as="ul">
      {Object.keys(color).map(
        colorKey =>
          typeof color[colorKey] === 'object' && (
            <Stack as="li">
              <Heading as="h3" size="charlie">
                {colorKey}
              </Heading>
              <Inline as="ul">
                {Object.keys(color[colorKey])
                  .reverse()
                  .map(nestedColorKey => (
                    <li>
                      <Palette
                        backgroundColor={color[colorKey][nestedColorKey]}
                      >
                        <PaletteText>{nestedColorKey}</PaletteText>
                      </Palette>
                    </li>
                  ))}
              </Inline>
            </Stack>
          )
      )}
    </Stack>
  );
};
