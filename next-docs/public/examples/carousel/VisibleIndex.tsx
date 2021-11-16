// @ts-nocheck
import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Example = () => {
  const items = Array.from({ length: 5 }, (value, index) => index);
  const ExampleContent = styled.div({
    width: '20rem',
    height: '12rem',
    borderRadius: rem(4),
    background: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
  });

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
