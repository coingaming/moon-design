import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ExampleContent = styled.div(({ theme: { color, newTokens } }) => ({
  width: rem(320),
  height: rem(192),
  borderRadius: newTokens.borderRadius.surface.xsmall,
  background: color.goku[80],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: rem(32),
}));

const Example = () => {
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <Carousel
      space="xlarge"
      items={items.map((item, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
};

export default Example;
