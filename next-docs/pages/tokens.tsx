import React from 'react';
import TokenTable from '../components/TokenTable';

const Text: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

export default function PageTokens() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tokens</h1>
        <Text>
          Design tokens are collections of user-interface information that
          define our product.
        </Text>
      </section>
      <h2 className="text-3xl font-semibold mt-8">Base</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'space',
              key: 'base.space',
              value: 16,
            },
            {
              name: 'fontSize',
              key: 'base.fontSize',
              value: 16,
            },

            {
              name: 'lineHeight',
              key: 'base.lineHeight',
              value: 20,
            },
            {
              name: 'fontSize',
              key: 'base.fontSize',
              value: 16,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Border</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'borderWidth',
              key: 'borderWidth',
              value: 1,
            },
            {
              name: 'borderStyle',
              key: 'borderStyle',
              value: 'solid',
            },

            {
              name: 'border',
              key: 'base.border',
              value: 'border 1px solid',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Box Shadow</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'boxShadow',
              key: 'boxShadow',
              value:
                '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Breakpoints</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'small',
              key: 'breakpoint.small',
              value: 500,
            },
            {
              name: 'medium',
              key: 'breakpoint.medium',
              value: 800,
            },
            {
              name: 'large',
              key: 'breakpoint.large',
              value: 1080,
            },
            {
              name: 'xlarge',
              key: 'breakpoint.xlarge',
              value: 1200,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Font</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'fontFace',
              key: 'fontFace',
              value: 'Returns CSS @font-face declaration.',
            },
            {
              name: 'fontFamily',
              key: 'fontFamily',
              value:
                'Averta Std, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            },
            {
              name: 'fontSize',
              key: 'fontSize.body',
              value: 14,
            },
            {
              name: 'fontWeight',
              key: 'fontWeight.normal',
              value: 400,
            },
            {
              name: 'fontWeight',
              key: 'fontWeight.semibold',
              value: 500,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Opacity</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'disabled',
              key: 'opacity.disabled',
              value: 0.35,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Radius</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'small',
              key: 'radius.small',
              value: 4,
            },
            {
              name: 'default',
              key: 'radius.default',
              value: 8,
            },
            {
              name: 'largest',
              key: 'radius.largest',
              value: 100,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Space</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'xsmall',
              key: 'space.xsmall',
              value: 4,
            },
            {
              name: 'small',
              key: 'space.small',
              value: 8,
            },
            {
              name: 'default',
              key: 'space.default',
              value: 16,
            },
            {
              name: 'medium',
              key: 'space.medium',
              value: 24,
            },
            {
              name: 'large',
              key: 'space.large',
              value: 32,
            },
            {
              name: 'xlarge',
              key: 'space.xlarge',
              value: 40,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Transition</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'slow',
              key: 'transitionDuration.slow',
              value: 0.4,
            },
            {
              name: 'default',
              key: 'transitionDuration.default',
              value: 0.2,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">z-index</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'carouselControl',
              key: 'zIndex.carouselControl',
              value: 5,
            },
            {
              name: 'dialog',
              key: 'zIndex.dialog',
              value: 10000,
            },
            {
              name: 'toggle',
              key: 'zIndex.toggle',
              value: 1,
            },
          ]}
        />
      </section>
    </>
  );
}
