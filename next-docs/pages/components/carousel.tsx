// @ts-nocheck
import React from 'react';
import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

import Preview from '../../components/codePreview/Preview';

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
    <Container>
      <Carousel
        scrollTo={5}
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </Container>
  );
};

const ExampleCustomizedArrows = () => {
  const items = Array.from({ length: 25 }, (value, index) => index);

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

  return (
    <Carousel
      scrollToLeftButton={({ scrollToStep, disabled }) => (
        <button disabled={disabled} onClick={scrollToStep}>
          Scroll to left
        </button>
      )}
      scrollToRightButton={({ scrollToStep, disabled }) => (
        <button disabled={disabled} onClick={scrollToStep}>
          Scroll to Right
        </button>
      )}
      items={items.map((item, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
};

const ExampleSpace = () => {
  const items = Array.from({ length: 5 }, (value, index) => index);

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

  return (
    <Carousel
      space="xlarge"
      items={items.map((item, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
}

const ExampleVisible = () => {
  const items = Array.from({ length: 5 }, (value, index) => index);
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
  return (
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
  );
};

export default function PageCarousel() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Carousel</h1>
        <p className="text-lg mt-4">
          An interactive extension of the Reel component to cycle through
          content.
        </p>
      </section>

      {/* Default Carousel */}
      <section className="mt-8">
        <Preview
          title="Carousel"
          preview={
            <div className="flex justify-around items-center w-full">
              <Example />
            </div>
          }
          code={`import { Carousel } from '@heathmont/moon-components';

() => {
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
    <Container>
      <Carousel
        scrollTo={5}
        items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
      />
    </Container>
  );
};
`}
        />
      </section>

      {/* Customized Arrows Carousel */}
      <section className="mt-8">
        <Preview
          title="Customized Arrows"
          preview={
            <div className="flex justify-around items-center w-full">
              <ExampleCustomizedArrows />
            </div>
          }
          code={`import { Carousel } from '@heathmont/moon-components';

() => {
  const items = Array.from({ length: 25 }, (value, index) => index);

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

  return (
    <Carousel
      scrollToLeftButton={({ scrollToStep, disabled }) => (
        <button disabled={disabled} onClick={scrollToStep}>
          Scroll to left
        </button>
      )}
      scrollToRightButton={({ scrollToStep, disabled }) => (
        <button disabled={disabled} onClick={scrollToStep}>
          Scroll to Right
        </button>
      )}
      items={items.map((item, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
};
`}
        />
      </section>

      {/* Space */}
      <section className="mt-8">
        <Preview
          title="Space"
          preview={
            <div className="flex justify-around items-center w-full">
              <ExampleSpace />
            </div>
          }
          code={`import { Carousel } from '@heathmont/moon-components';

() => {
  const items = Array.from({ length: 5 }, (value, index) => index);

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

  return (
    <Carousel
      space="xlarge"
      items={items.map((item, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
};
`}
        />
      </section>

      {/* Visible indices */}
      <section className="mt-8">
        <Preview
          title="Visible indices"
          preview={
            <div className="flex justify-around items-center w-full">
              <ExampleVisible />
            </div>
          }
          code={`import { Carousel } from '@heathmont/moon-components';

() => {
    const items = Array.from({ length: 5 }, (value, index) => index);
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
    return (
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
    );
};
`}
        />
      </section>
    </>
  );
}
