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
});

const Example = () => {
  const items = Array.from({ length: 25 }, (_, index) => index);
  return (
    <Carousel
      isRtl={true}
      scrollTo={5}
      items={items.map((_, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
};

export default Example;
