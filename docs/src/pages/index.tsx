import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { Global } from '@heathmont/moon-global';
import { mq, rem } from '@heathmont/moon-utils';
import { ThemeProvider, moonDesignDark } from '@heathmont/moon-themes';
import { Inline } from '@heathmont/moon-components';

import MoonImg from '../images/moon2.png';
import EarthImg from '../images/earth.png';
import BackgroundImg from '../images/back2.png';

const MainText = styled.div({
  fontWeight: 'normal',
  fontSize: '11.46vw',
  lineHeight: '1.24',
  textAlign: 'center',
  letterSpacing: '-0.05em',
  color: '#FFFFFF',
  position: 'absolute',
  left: 0,
  top: '13vw',
  width: '100%',
  [mq(767, 'max-width')]: {
    fontSize: '96px',
    lineHeight: '0.64',
    left: 0,
    top: '28.5vh',
    width: '100%',
  },

  span: {
    display: 'inline-block',
    verticalAlign: 'top',
    position: 'relative',
    [mq(767, 'max-width')]: {
      width: '320px',
    },
  },
});

const Wrap = styled.div({
  margin: 0,
  height: '100vh',
  // height: calc(100vh - var(--vh-offset, 0px));
  overflow: 'hidden',
  position: 'relative',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  background: '#1D1D1D',
  overflowX: 'hidden',
});

const Head = styled.div({
  position: 'absolute',
  left: 0,
  top: '58px',
  zIndex: 5,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  flexDirection: 'column',
  marginLeft: 0,
  svg: {
    display: 'block',
  },
  [mq(767)]: {
    top: '3.7vw',
    marginLeft: rem(228),
    flexDirection: 'row',
  },
  span: {
    display: 'block',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#FFFFFF',
    marginLeft: '18px',
  },
});

const LeftText = styled.div({
  fontWeight: 'normal',
  fontSize: '20px',
  lineHeight: '25px',
  color: '#FFFFFF',
  transform: 'rotate(-90deg)',
  transformOrigin: 'left top',
  position: 'absolute',
  top: '69%',
  left: '3.6%',
  zIndex: 5,
  [mq(767, 'max-width')]: {
    transform: 'none',
    position: 'absolute',
    top: 'auto',
    bottom: '51px',
    left: 0,
    width: '100%',
    textAlign: 'center',
  },
});

const Moon = styled.div({
  position: 'absolute',
  left: '50%',
  top: '3.7vw',
  width: '130%',
  transform: 'translateX(-50%)',
  img: {
    maxWidth: '100%',
    display: 'block',
    width: '100%',
  },
  [mq(767, 'max-width')]: {
    top: '24vh',
    width: '885px',
  },
});

const Earth = styled.div({
  position: 'absolute',
  top: '25%',
  right: '14%',
  left: 'auto',
  img: {
    display: 'block',
    width: '28.48vw',
    [mq(767, 'max-width')]: {
      width: '390px',
    },
  },
  [mq(767, 'max-width')]: {
    top: '9%',
    right: '18%',
    left: 'auto',
  },
});

const Back = styled.img({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  background: `url(${BackgroundImg}) repeat center center`,
  opacity: 0.2,
  filter: 'invert(1)',
});

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) => `translate3d(${x / 10}px, ${-y / 10}px,0)`;
const trans2 = (x: number, y: number) =>
  `translate3d(${x / 8 + 35}px,${y / 8 - 23}px,0)`;

const HeadLink = styled(Link)({
  color: '#FFFFFF',
  textDecoration: 'none',
  '&:hover': {
    color: '#939597',
  },
  display: 'flex',
  alignItems: 'end',
  span: {
    color: '#000',
    backgroundColor: '#fff',
    marginLeft: rem(8),
  },
});

const Nav = styled(Inline as any)({
  marginLeft: rem(250),
  [mq(767, 'max-width')]: {
    margin: 0,
  },
});

export default function Home() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <>
      <Global />
      <ThemeProvider theme={moonDesignDark}>
        <Wrap
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <Head>
            <svg
              width="92"
              height="21"
              viewBox="0 0 92 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.55793 20.182V7.6865C6.34629 6.22803 8.08068 5.08491 9.69681 5.08491C11.8648 5.08491 12.9685 6.42513 12.9685 9.14496V20.182H18.5264V7.76533C19.2754 6.22804 20.9309 5.08491 22.6259 5.08491C24.7939 5.08491 25.8976 6.42513 25.8976 9.14496V20.182H31.4555V7.88359C31.4555 2.71984 28.6568 0 24.4391 0C21.601 0 18.96 1.41905 17.6592 3.35053C16.8315 1.49788 14.5058 0 11.5495 0C9.02671 0 7.01639 0.985449 5.55793 2.91693V0.512434H0V20.182H5.55793ZM77.662 7.64708C78.608 6.18862 80.3818 5.08491 82.1162 5.08491C84.1659 5.08491 85.8609 6.22803 85.8609 9.26322V20.182H91.4188V8.1201C91.4188 3.0746 88.8172 0 84.2448 0C81.6038 0 79.4358 0.94603 77.662 2.87751V0.512434H72.104V20.182H77.662V7.64708ZM56.183 10.1276C56.183 15.6805 51.6815 20.182 46.1286 20.182C40.5758 20.182 36.0743 15.6805 36.0743 10.1276C36.0743 4.57473 40.5758 0.0732392 46.1286 0.0732392C51.6815 0.0732392 56.183 4.57473 56.183 10.1276ZM62.9211 6.88734C64.8028 6.88734 66.3282 5.36195 66.3282 3.48029C66.3282 1.59863 64.8028 0.0732392 62.9211 0.0732392C61.0395 0.0732392 59.5141 1.59863 59.5141 3.48029C59.5141 5.36195 61.0395 6.88734 62.9211 6.88734Z"
                fill="white"
              />
            </svg>
            <span>by Coingaming</span>
            <Nav space="60px">
              <HeadLink to="/core/badge">Components</HeadLink>
              <HeadLink to="/assets/icons">Assets</HeadLink>
            </Nav>
          </Head>
          <LeftText>open source design system</LeftText>
          <MainText>
            <span>design system</span>
          </MainText>
          <Moon id="scene1">
            <animated.img
              alt="moon"
              src={MoonImg}
              data-depth="0.2"
              style={{ transform: props.xy.interpolate(trans1) }}
            />
            <Earth data-depth="0.4">
              <animated.img
                alt="earth"
                src={EarthImg}
                style={{ transform: props.xy.interpolate(trans2) }}
              />
            </Earth>
          </Moon>
          <Back />
        </Wrap>
      </ThemeProvider>
    </>
  );
}
