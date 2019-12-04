/* eslint-disable no-console */
import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { sportsbetDark, ThemeProvider } from '@heathmont/sportsbet-themes';

import { Carousel, CarouselScroll, CarouselScrollItem } from '../carousel';
import { CarouselControl, CarouselControlCaption } from '../control';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Carousel', () => {
  test('renders with controls', () => {
    const carousel = create(
      renderWithTheme(
        <Carousel>
          <CarouselControl>
            <CarouselControlCaption>Scroll Left</CarouselControlCaption>
          </CarouselControl>
          <CarouselScroll>
            <CarouselScrollItem>
              <div
                css={{
                  height: '12rem',
                  width: '20rem',
                  marginRight: '1rem',
                  background: 'red',
                }}
              />
            </CarouselScrollItem>
            <CarouselScrollItem>
              <div
                css={{
                  height: '12rem',
                  width: '20rem',
                  marginRight: '1rem',
                  background: 'red',
                }}
              />
            </CarouselScrollItem>
            <CarouselScrollItem>
              <div
                css={{
                  height: '12rem',
                  width: '20rem',
                  marginRight: '1rem',
                  background: 'red',
                }}
              />
            </CarouselScrollItem>
          </CarouselScroll>
          <CarouselControl>
            <CarouselControlCaption>Scroll Right</CarouselControlCaption>
          </CarouselControl>
        </Carousel>
      )
    );

    expect(carousel).toMatchSnapshot();
  });

  test('renders without controls', () => {
    const carousel = create(
      renderWithTheme(
        <Carousel>
          <CarouselScroll>
            <CarouselScrollItem>
              <div
                css={{
                  height: '12rem',
                  width: '20rem',
                  marginRight: '1rem',
                  background: 'red',
                }}
              />
            </CarouselScrollItem>
            <CarouselScrollItem>
              <div
                css={{
                  height: '12rem',
                  width: '20rem',
                  marginRight: '1rem',
                  background: 'red',
                }}
              />
            </CarouselScrollItem>
            <CarouselScrollItem>
              <div
                css={{
                  height: '12rem',
                  width: '20rem',
                  marginRight: '1rem',
                  background: 'red',
                }}
              />
            </CarouselScrollItem>
          </CarouselScroll>
        </Carousel>
      )
    );

    expect(carousel).toMatchSnapshot();
  });
});
