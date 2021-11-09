import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Example = () => {
  const items = Array.from({ length: 25 }, (value, index) => index);

  const ExampleContent = styled.div(({ theme: { color, radius } }) => ({
    width: '20rem',
    height: '12rem',
    borderRadius: rem(radius.small),
    background: color.goku[80],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Container = styled.div({
    maxWidth: '600px',
  });

  return (
    <div className="flex justify-around items-center w-full">
      <Container>
        <Carousel
          scrollTo={5}
          items={items.map((item, index) => (
            <ExampleContent>{index}</ExampleContent>
          ))}
        />
      </Container>
    </div>
  );
};

export default Example;
