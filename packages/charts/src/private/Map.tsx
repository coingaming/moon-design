import React, { useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styled from 'styled-components';
import { useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import { Text } from '@heathmont/moon-components';

import { TooltipWrapper, Item, ColorPreview } from './Tooltip';
import worldMap from './World110m';

const Container = styled.div({
  position: 'relative',
  width: '60%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

type Props = {
  data: {
    label: string | React.ReactNode;
    code: string;
    value: number;
    opacity: number;
    color: string;
  }[];
};

export const Map: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
  const defaultColor = themed('color', 'goku.80')(theme);
  const tooltipRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState<any>(null);
  const isCountryCode = (
    code: string,
    country: { ISO_A2: string; ISO_A3: string },
  ) => {
    if (!code) return false;
    return code.length === 2
      ? code === country.ISO_A2
      : code === country.ISO_A3;
  };

  return (
    <Container>
      <TooltipWrapper
        ref={tooltipRef}
        style={{
          visibility: hoveredItem ? 'visible' : 'hidden',
          position: 'absolute',
          left: 0,
          top: 0,
          transition: 'transform 0.4s ease',
        }}
      >
        {!!hoveredItem && (
          <Item>
            <>
              <ColorPreview
                style={{
                  background: hoveredItem.color,
                  opacity: hoveredItem.opacity,
                }}
              />
              <Text size={12} as="span">
                {hoveredItem.label}
              </Text>{' '}
              • {hoveredItem.value}
            </>
          </Item>
        )}
      </TooltipWrapper>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [0, 50],
        }}
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geography: any, index: number) => {
              const country = geography.properties;
              const activeItem = data.find((item) =>
                isCountryCode(item.code, country));
              const fillColor = activeItem ? activeItem.color : defaultColor;
              const opacity = activeItem ? activeItem.opacity : 1;

              return (
                <Geography
                  // eslint-disable-next-line
                  key={`${country.ISO_A3}-${index}`}
                  tabIndex={-1}
                  geography={geography}
                  style={{
                    default: { fill: fillColor, outline: 'none', opacity },
                    hover: { fill: fillColor, outline: 'none' },
                    pressed: { fill: fillColor, outline: 'none' },
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                  }}
                  onMouseMove={(event) => {
                    setHoveredItem(activeItem);
                    const ref = tooltipRef && tooltipRef.current;
                    if (!ref) return;
                    // @ts-ignore
                    const parentRect = ref.parentNode.getBoundingClientRect();
                    // @ts-ignore
                    const tooltipRect = ref.getBoundingClientRect();
                    const x = event.clientX - parentRect.left - tooltipRect.width / 2;
                    const y = event.clientY - parentRect.top - tooltipRect.height * 1.2;
                    // @ts-ignore
                    ref.style.transform = `translate(${x}px, ${y}px)`;
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </Container>
  );
};
