import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ExampleContent = styled.div(({ theme: { color, newTokens } }) => ({
  width: rem(320),
  height: rem(192),
  borderRadius: newTokens.borderRadius.xsmall,
  background: color.goku[80],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Container = styled.div({
  maxWidth: rem(600),
});

const Example = () => {
  const items = Array.from({ length: 25 }, (_, index) => index);
  return (
    <div className="flex justify-around items-center w-full">
      <Container>
        <Carousel
          isRtl={true}
          scrollTo={5}
          items={items.map((_, index) => (
            <ExampleContent>{index}</ExampleContent>
          ))}
        />
      </Container>
    </div>
  );
};

export default Example;
