import { Carousel } from '@heathmont/moon-core-tw';
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

  return (<div className='flex flex-col gap-4 overflow-hidden'>
    <div>
      <h3>Two X small</h3>
      <Carousel
        itemGap="2xs"
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </div>

    <div>
      <h3>X small</h3>
      <Carousel
        itemGap="xs"
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </div>

    <div>
      <h3>Small</h3>
      <Carousel
        itemGap="sm"
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </div>

    <div>
      <h3>Medium</h3>
      <Carousel
        itemGap="md"
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </div>

    <div>
      <h3>Large</h3>
      <Carousel
        itemGap="lg"
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </div>
  </div>);
};

export default Example;
