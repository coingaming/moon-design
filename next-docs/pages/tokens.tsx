import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import TokenTable from '../components/TokenTable';
import tokenImg from '../public/illustartions/tokens.png';

const Text: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

const ListItem: React.FC<{}> = ({ children }) => (
  <li className="text-lg mt-4">{children}</li>
);

export default function PageTokensNew() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tokens</h1>

        <div className="mt-8">
          <Text>
            Design tokens are{' '}
            <span className="font-bold">
              all the values needed to construct and maintain a design system{' '}
            </span>
            — spacing, color, typography, object styles, animation, etc.
          </Text>
          <Text>
            These can represent anything defined by design: a color as a HEX
            value, an opacity as a number, an animation ease as Bezier
            coordinates.
          </Text>

          <Text>
            They’re used in place of hard-coded values in order to ensure
            flexibility and unity across all multi-product experiences.
          </Text>

          <Text>
            Design tokens are directly integrated into our component libraries.
            They cover the various options of platform scales, color themes, and
            more.
          </Text>
        </div>

        <div className="mt-8 flex flex-row justify-between gap-20">
          <div className="">
            <h3 className="text-xl text-black font-bold">
              How to create your own custom theme based and use it for your
              product.
            </h3>

            <ul className="list-decimal list-inside">
              <ListItem>
                Create your product{' '}
                <NextLink href="https://github.com/coingaming/moon-design/tree/develop/packages/themes/src">
                  <a className="underline">theme template file</a>
                </NextLink>
                .
              </ListItem>

              <ListItem>
                Check the{' '}
                <NextLink href="/colours">
                  <a className="underline">guide for colours</a>
                </NextLink>
                .
              </ListItem>

              <ListItem>Replace colour values one by one.</ListItem>

              <ListItem>Change the values to your product ones.</ListItem>

              <ListItem>Publish your changes.</ListItem>

              <ListItem>
                Share tokens with your product front-end developers.
              </ListItem>

              <ListItem>Enjoy your new theme! 🎉</ListItem>
            </ul>
          </div>

          <Image className="rounded-lg" src={tokenImg} alt="Colours usage" />
        </div>
      </section>
      <h2 className="text-3xl font-semibold mt-8">Border Radius</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'none',
              key: 'borderRadius.none',
              value: 0,
            },
            {
              name: 'twoxsmall',
              key: 'borderRadius.twoxsmall',
              value: '2px',
            },
            {
              name: 'xsmall',
              key: 'borderRadius.xsmall',
              value: '4px',
            },
            {
              name: 'small',
              key: 'borderRadius.small',
              value: '6px',
            },
            {
              name: 'medium',
              key: 'borderRadius.medium',
              value: '8px',
            },
            {
              name: 'large',
              key: 'borderRadius.large',
              value: '12px',
            },
            {
              name: 'xlarge',
              key: 'borderRadius.xlarge',
              value: '16px',
            },
            {
              name: 'twoxlarge',
              key: 'borderRadius.twoxlarge',
              value: '24px',
            },
            {
              name: 'full',
              key: 'borderRadius.full',
              value: '9999px',
            },
            {
              name: 'interactive',
              key: 'borderRadius.interactive',
              value: '9999px',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Breakpoint</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'small',
              key: 'breakpoint.small',
              value: '640px',
            },
            {
              name: 'medium',
              key: 'breakpoint.medium',
              value: '768px',
            },
            {
              name: 'large',
              key: 'breakpoint.large',
              value: '1024px',
            },
            {
              name: 'xlarge',
              key: 'breakpoint.xlarge',
              value: '1280px',
            },
            {
              name: 'twoxlarge',
              key: 'breakpoint.twoxlarge',
              value: '1536px',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Border</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'default',
              key: 'border.default',
              value: '1px solid',
            },
            {
              name: 'interactive',
              key: 'border.interactive',
              value: '2px solid',
            },
            {
              name: 'width.default',
              key: 'border.width.default',
              value: '1px',
            },
            {
              name: 'width.interactive',
              key: 'border.width.interactive',
              value: '2px',
            },
            {
              name: 'style',
              key: 'border.style',
              value: 'solid',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Space</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'threexsmall',
              key: 'space.threexsmall',
              value: '4px',
            },
            {
              name: 'twoxsmall',
              key: 'space.twoxsmall',
              value: '8px',
            },
            {
              name: 'xsmall',
              key: 'space.xsmall',
              value: '12px',
            },
            {
              name: 'small',
              key: 'space.small',
              value: '16px',
            },
            {
              name: 'medium',
              key: 'space.medium',
              value: '24px',
            },
            {
              name: 'large',
              key: 'space.large',
              value: '32px',
            },
            {
              name: 'xlarge',
              key: 'space.xlarge',
              value: '40px',
            },
            {
              name: 'twoxlarge',
              key: 'space.twoxlarge',
              value: '48px',
            },
            {
              name: 'threexlarge',
              key: 'space.threexlarge',
              value: '56px',
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
              key: 'transition.slow',
              value: '0.4s ease-in-out',
            },
            {
              name: 'default',
              key: 'transition.default',
              value: '0.2s ease-in-out',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">zIndex</h2>
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

      <h2 className="text-3xl font-semibold mt-8">Box Shadow</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'small',
              key: 'boxShadow.small',
              value:
                '0 6px 6px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
            },
            {
              name: 'medium',
              key: 'boxShadow.medium',
              value:
                '0 12px 12px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
            },
            {
              name: 'large',
              key: 'boxShadow.large',
              value:
                '0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
            },
            {
              name: 'xlarge',
              key: 'boxShadow.xlarge',
              value:
                '0 32px  32px -8px rgba(0, 0, 0, 0.08), 0 0 32px -8px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.2)',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Font</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'face',
              key: 'font.face',
              value: 'Returns CSS @font-face declaration',
            },
            {
              name: 'family',
              key: 'font.family',
              value:
                'Averta Std, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            },
            {
              name: 'size',
              key: 'font.size',
              value: '16px',
            },
            {
              name: 'weight.normal',
              key: 'font.weight.normal',
              value: 400,
            },
            {
              name: 'weight.semibold',
              key: 'font.weight.semibold',
              value: 500,
            },
            {
              name: 'lineHeight',
              key: 'font.lineHeight',
              value: '24px',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Opacity</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'opacity',
              key: 'opacity',
              value: 0.32,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Button // To be done</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'primary',
              key: 'button.primary',
              value: 'To be done',
            },
            {
              name: 'secondary',
              key: 'button.secondary',
              value: 'To be done',
            },
            {
              name: 'tertiary',
              key: 'button.tertiary',
              value: 'To be done',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Text link</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'fontWeight',
              key: 'textLink.fontWeight',
              value: 500,
            },
            {
              name: 'color.default',
              key: 'button.color.default',
              value: 'piccolo',
            },
            {
              name: 'color.hover',
              key: 'button.color.hover',
              value: 'hit',
            },
            {
              name: 'color.visited',
              key: 'button.color.visited',
              value: 'hit',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Hover</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'primary',
              key: 'hover.primary',
              value: 'bulma, 12%',
            },
            {
              name: 'secondary',
              key: 'hover.secondary',
              value: 'piccolo, 12%',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Focus</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'focus',
              key: 'focus',
              value: '0 0 0 4px piccolo, 20%',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Transform</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'transform',
              key: 'transform',
              value: 'scale(0.9)',
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Size</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'twoxsmall',
              key: 'size.twoxsmall',
              value: '16px',
            },
            {
              name: 'xsmall',
              key: 'size.xsmall',
              value: '24px',
            },
            {
              name: 'small',
              key: 'size.small',
              value: '32px',
            },
            {
              name: 'medium',
              key: 'size.medium',
              value: '40px',
            },
            {
              name: 'large',
              key: 'size.large',
              value: '48px',
            },
            {
              name: 'xlarge',
              key: 'size.xlarge',
              value: '56px',
            },
            {
              name: 'twoxlarge',
              key: 'size.twoxlarge',
              value: '64px',
            },
          ]}
        />
      </section>
    </>
  );
}
