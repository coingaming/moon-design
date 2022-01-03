// @ts-nocheck
import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ExampleContent = styled.div(({ theme: { color, radius } }) => ({
  width: '20rem',
  height: '12rem',
  borderRadius: rem(radius.small),
  background: color.goku[80],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
}));

const Example = () => {
  const items = Array.from({ length: 5 }, (value, index) => index);

  return (
    <div className="flex justify-around items-center w-full">
      <Carousel
        space="xlarge"
        items={({ firstVisibleIndex, lastVisibleIndex }) =>
          items.map((item, index) => (
            <ExampleContent>
              {firstVisibleIndex}, {lastVisibleIndex}
            </ExampleContent>
          ))
        }
      />
    </div>
  );
};

export default Example;
