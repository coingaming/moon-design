import React from 'react';
import NextLink from 'next/link';
import ComponentPageDescription from '../components/ComponentPageDescription';
import TokenTable from '../components/TokenTable';
import tokenImg from '../public/illustartions/tokens.png';

const PageTokensNew = () => (
  <>
    <ComponentPageDescription title="Tokens" image={tokenImg}>
      <p>
        Design tokens are{' '}
        <span className="font-medium">
          all the values needed to construct and maintain a design system{' '}
        </span>
        — spacing, color, typography, object styles, animation, etc.
      </p>
      <p>
        These can represent anything defined by design: a color as a HEX value,
        an opacity as a number, an animation ease as Bezier coordinates.
      </p>
      <p>
        They're used in place of hard-coded values in order to ensure
        flexibility and unity across all multi-product experiences.
      </p>
      <p>
        Design tokens are directly integrated into our component libraries. They
        cover the various options of platform scales, color themes, and more.
      </p>
      <h2 className="text-moon-20 font-medium">
        How to create your own custom theme based and use it for your product.
      </h2>
      <ul className="list-decimal list-inside">
        <li>
          Create your product{' '}
          <a
            href="https://github.com/coingaming/moon-design/tree/develop/packages/themes/src"
            target="_black"
            rel="noreferrer"
            className="underline"
          >
            theme template file
          </a>
          .
        </li>
        <li>
          Check the{' '}
          <NextLink href="/colours">
            <a className="underline">guide for colours</a>
          </NextLink>
          .
        </li>
        <li>Replace colour values one by one.</li>
        <li>Change the values to your product ones.</li>
        <li>Publish your changes.</li>
        <li>Share tokens with your product front-end developers.</li>
        <li>Enjoy your new theme! 🎉</li>
      </ul>
    </ComponentPageDescription>
    <TokenTable
      title="Border Radius"
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
    <TokenTable
      title="Breakpoint"
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
    <TokenTable
      title="Border"
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
    <TokenTable
      title="Space"
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
    <TokenTable
      title="Transition"
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
    <TokenTable
      title="zIndex"
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
    <TokenTable
      title="Box Shadow"
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
    <TokenTable
      title="Font"
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
    <TokenTable
      title="Opacity"
      data={[
        {
          name: 'opacity',
          key: 'opacity',
          value: 0.32,
        },
      ]}
    />
    <TokenTable
      title="Button"
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
    <TokenTable
      title="p link"
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
    <TokenTable
      title="Hover"
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
    <TokenTable
      title="Focus"
      data={[
        {
          name: 'focus',
          key: 'focus',
          value: '0 0 0 4px piccolo, 20%',
        },
      ]}
    />
    <TokenTable
      title="Transform"
      data={[
        {
          name: 'transform',
          key: 'transform',
          value: 'scale(0.9)',
        },
      ]}
    />
    <TokenTable
      title="Size"
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
  </>
);

export default PageTokensNew;
