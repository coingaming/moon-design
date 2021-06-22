import React from 'react';

import { Carousel } from '@heathmont/moon-components';
import Preview from '../../components/codePreview/Preview';
import styled from 'styled-components';

export default function PageCarousel() {
  const items = Array.from({ length: 25 }, (value, index) => index);

  const ExampleContent = styled.div(({ theme: { color, radius } }) => ({
    width: '20rem',
    height: '12rem',
    borderRadius: radius.small,
    background: color.goku[80],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Container = styled.div({
    maxWidth: '600px',
  });

  const CarouselExample = () => (
    <Container>
      <Carousel
        scrollTo={5}
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </Container>
  );

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Carousel</h1>
        <p className="text-lg mt-4">Carousel.</p>
      </section>

      {/* Image avatars */}
      <section className="mt-8">
        <Preview
          title="Image avatars"
          preview={
            <div className="flex justify-around items-center w-full">
              <CarouselExample />
            </div>
          }
          code={`import { Carousel } from '@heathmont/moon-components';

`}
        />
      </section>
    </>
  );
}
