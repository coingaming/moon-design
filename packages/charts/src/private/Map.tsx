import React, { useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styled from 'styled-components';
import { useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

import { TooltipWrapper, Item, ColorPreview } from './Tooltip';
import worldMap from './World110m';

const Container = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = {
  color: string;
  data: {
    label: string | React.ReactNode;
    code: string;
    value: number;
    opacity: number;
  }[];
};

export const Map: React.FC<Props> = ({ data, color }) => {
  const theme = useTheme();
  const defaultColor = themed('color', 'goku.80')(theme);
  const tooltipRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState<any>(null);
  const countryCode = (country: any) => country.ISO_A3;

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
          <Item size={14} as="div">
            <>
              <ColorPreview style={{ background: color }} />
              {hoveredItem.label} • {hoveredItem.value}
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
              const code = countryCode(geography.properties);
              const activeItem = data.find(item => item.code === code);
              const fillColor = activeItem ? color : defaultColor;
              const opacity = activeItem ? activeItem.opacity : 1;

              return (
                <Geography
                  // eslint-disable-next-line
                  key={`${code}-${index}`}
                  geography={geography}
                  style={{
                    default: { fill: fillColor, outline: 'none', opacity },
                    hover: { fill: fillColor, outline: 'none' },
                    pressed: { fill: fillColor, outline: 'none' },
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                  }}
                  onMouseMove={event => {
                    setHoveredItem(activeItem);
                    const ref = tooltipRef && tooltipRef.current;
                    if (!ref) return;
                    // @ts-ignore
                    const parentRect = ref.parentNode.getBoundingClientRect();
                    // @ts-ignore
                    const tooltipRect = ref.getBoundingClientRect();
                    const x =
                      event.clientX - parentRect.left - tooltipRect.width / 2;
                    const y =
                      event.clientY - parentRect.top - tooltipRect.height * 1.2;
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
