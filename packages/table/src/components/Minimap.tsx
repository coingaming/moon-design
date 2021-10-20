import { rem } from '@heathmont/moon-utils';
import React from 'react';
import { useEffect, useCallback, useState, MutableRefObject } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ visible: boolean; offset: number }>(
  ({ theme, visible, offset }) => ({
    position: 'absolute',
    bottom: rem(offset + 40),
    right: rem(40),
    width: 'auto',
    height: rem(56),
    zIndex: 1,
    background: theme.color.gohan[100],
    borderRadius: rem(8),
    boxShadow: theme.boxShadow,
    padding: rem(4),
    transition: `opacity ${theme.transitionDuration.default}s`,
    pointerEvents: 'none',
    opacity: visible ? 1 : 0,
  })
);

const Viewport = styled.div(({ theme }) => ({
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
  '&:after': {
    content: '""',
    position: 'absolute',
    border: `2px solid ${theme.color.piccolo[100]}`,
    borderRadius: rem(4),
    width: '100%',
    height: '100%',
  },
}));

const Grid = styled.div({
  display: 'grid',
  gridAutoFlow: 'column',
  height: '100%',
  gap: rem(4),
  position: 'relative',
});

const Column = styled.div(({ theme }) => ({
  height: '100%',
  width: rem(8),
  background: theme.color.goku[80],
  borderRadius: rem(2),
}));

type Props = {
  numberOfColumns: number;
  tableRef: MutableRefObject<HTMLElement | null>;
  footerRef: MutableRefObject<HTMLElement | null>;
};

let timeoutId: any;
const TIMEOUT = 150;

const Minimap: React.FC<Props> = ({ tableRef, footerRef, numberOfColumns }) => {
  const [styles, setStyles] = useState({});
  const [visible, setVisible] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleUpdateViewport = useCallback(() => {
    if (!tableRef.current) return {};

    const fullHeight = tableRef.current.scrollHeight;
    const fullWidth = tableRef.current.scrollWidth;

    const viewportHeight = tableRef.current.clientHeight;
    const viewportWidth = tableRef.current.clientWidth;

    const scrollTop = tableRef.current.scrollTop;
    const scrollLeft = tableRef.current.scrollLeft;

    setStyles({
      height: `${(viewportHeight / fullHeight) * 100}%`,
      width: `${(viewportWidth / fullWidth) * 100}%`,
      top: `${(scrollTop / fullHeight) * 100}%`,
      left: `${(scrollLeft / fullWidth) * 100}%`,
    });

    setVisible(true);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);
  }, [tableRef]);

  useEffect(() => {
    if (!footerRef || !footerRef.current) return;
    setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef, setFooterHeight]);

  useEffect(() => {
    if (!tableRef || !tableRef.current) return;
    const current = tableRef.current;

    handleUpdateViewport();
    current.addEventListener('scroll', handleUpdateViewport, { passive: true });
    return () => {
      current.removeEventListener('scroll', handleUpdateViewport);
      clearTimeout(timeoutId);
    };
  }, [tableRef, handleUpdateViewport]);

  return (
    <Wrapper visible={visible} offset={footerHeight}>
      <Grid>
        <Viewport style={styles} />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <Column key={index} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Minimap;
