import React from 'react';
import { rem } from '@heathmont/moon-utils';
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
              value: 2,
            },
            {
              name: 'xsmall',
              key: 'borderRadius.xsmall',
              value: 4,
            },
            {
              name: 'small',
              key: 'borderRadius.small',
              value: 6,
            },
            {
              name: 'medium',
              key: 'borderRadius.medium',
              value: 8,
            },
            {
              name: 'large',
              key: 'borderRadius.large',
              value: 12,
            },
            {
              name: 'xlarge',
              key: 'borderRadius.xlarge',
              value: 16,
            },
            {
              name: 'twoxlarge',
              key: 'borderRadius.twoxlarge',
              value: 24,
            },
            {
              name: 'full',
              key: 'borderRadius.full',
              value: 9999,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Interactive Border Radius</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'interactiveBorderRadius',
              key: 'interactiveBorderRadius',
              value: 9999,
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
              value: 640,
            },
            {
              name: 'medium',
              key: 'breakpoint.medium',
              value: 768,
            },
            {
              name: 'large',
              key: 'breakpoint.large',
              value: 1024,
            },
            {
              name: 'xlarge',
              key: 'breakpoint.xlarge',
              value: 1280,
            },
            {
              name: 'twoxlarge',
              key: 'breakpoint.twoxlarge',
              value: 1536,
            },
          ]}
        />
      </section>

      <h2 className="text-3xl font-semibold mt-8">Border</h2>
      <section className="mt-4">
        <TokenTable
          data={[
            {
              name: 'border',
              key: 'border',
              value: '1px solid',
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
              value: 2,
            },
            {
              name: 'twoxsmall',
              key: 'space.twoxsmall',
              value: 4,
            },
            {
              name: 'xsmall',
              key: 'space.xsmall',
              value: 8,
            },
            {
              name: 'small',
              key: 'space.small',
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
            {
              name: 'twoxlarge',
              key: 'space.twoxlarge',
              value: 48,
            },
            {
              name: 'threexlarge',
              key: 'space.threexlarge',
              value: 56,
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
    </>
  );
}
