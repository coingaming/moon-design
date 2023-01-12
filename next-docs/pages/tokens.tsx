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
            href="https://github.com/coingaming/moon-design/tree/develop/workspaces/themes/src"
            target="_blank"
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
      title="Border radius"
      data={[
        {
          name: 'XS interactive border radius',
          variable: '--radius-i-xs',
          className: 'rounded-moon-i-xs',
          value: '4px',
        },
        {
          name: 'SM interactive border radius',
          variable: '--radius-i-sm',
          className: 'rounded-moon-i-sm',
          value: '8px',
        },
        {
          name: 'MD interactive border radius',
          variable: '--radius-i-md',
          className: 'rounded-moon-i-md',
          value: '12px',
        },
        {
          name: 'XS surface border radius',
          variable: '--radius-s-xs',
          className: 'rounded-moon-s-xs',
          value: '4px',
        },
        {
          name: 'SM surface border radius',
          variable: '--radius-s-sm',
          className: 'rounded-moon-s-sm',
          value: '8px',
        },
        {
          name: 'MD surface border radius',
          variable: '--radius-s-md',
          className: 'rounded-moon-s-md',
          value: '12px',
        },
        {
          name: 'LG surface border radius',
          variable: '--radius-s-lg',
          className: 'rounded-moon-s-lg',
          value: '16px',
        },
      ]}
    />
    <TokenTable
      title="Box shadow"
      data={[
        {
          name: 'XS box shadow',
          variable: '--shadow-xs',
          className: 'shadow-moon-xs',
          value: '0 4px 12px -6px rgb(0 0 0 / 0.06)',
        },
        {
          name: 'SM box shadow',
          variable: '--shadow-sm',
          className: 'shadow-moon-sm',
          value: '0 6px 6px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4)',
        },
        {
          name: 'MD box shadow',
          variable: '--shadow-md',
          className: 'shadow-moon-md',
          value: '0 12px 12px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4)',
        },
        {
          name: 'LG box shadow',
          variable: '--shadow-lg',
          className: 'shadow-moon-lg',
          value: '0 8px 24px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4)',
        },
        {
          name: 'XL box shadow',
          variable: '--shadow-xl',
          className: 'shadow-moon-xl',
          value:
            '0 32px 32px -8px rgb(0 0 0 / 0.08), 0 0 32px -8px rgb(0 0 0 / 0.12), 0 0 1px rgb(0 0 0 / 0.2)',
        },
      ]}
    />
    <TokenTable
      title="Opacity"
      data={[
        {
          name: 'Opacity',
          variable: '--opacity-moon',
          className: 'opacity-moon',
          value: '0.32',
        },
      ]}
    />
  </>
);

export default PageTokensNew;
