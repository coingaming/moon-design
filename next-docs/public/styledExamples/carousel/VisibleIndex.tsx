// @ts-nocheck
import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ExampleContent = styled.div({
  width: rem(320),
  height: rem(192),
  borderRadius: "0.5rem",
  background: 'darkgray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: rem(32),
});

const Example = () => {
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <Carousel
      space="xlarge"
      items={({ firstVisibleIndex, lastVisibleIndex }) =>
        items.map((item, index) => (
          <ExampleContent key={index}>
            {firstVisibleIndex}, {lastVisibleIndex}
          </ExampleContent>
        ))
      }
    />
  );
};

export default Example;
