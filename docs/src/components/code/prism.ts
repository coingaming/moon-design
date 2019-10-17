import { CSSObject } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { PrismTheme } from 'prism-react-renderer';

export const syntaxStyles: CSSObject = {
  pre: { padding: '1em', overflow: 'auto', marginBottom: '0' },
};

// Adjusted "Oceanic Next"
// Author: Dmitri Voronianski (https://github.com/voronianski)
// https://github.com/voronianski/oceanic-next-color-scheme
// Adapted from: https://github.com/reactjs/reactjs.org/blob/428d52b/src/prism-styles.js

const prismThemeColors = {
  char: '#D8DEE9',
  comment: '#999999',
  keyword: '#c5a5c5',
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#5FB3B3',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
};

export const prismTheme: PrismTheme = {
  plain: {
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.8rem',
    lineHeight: 1.5,
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    tabSize: '4',
    hyphens: 'none',
  },
  styles: [
    {
      types: ['attr-name'],
      style: {
        color: prismThemeColors.keyword,
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: prismThemeColors.string,
      },
    },
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: prismThemeColors.comment,
      },
    },
    {
      types: [
        'property',
        'number',
        'function-name',
        'constant',
        'symbol',
        'deleted',
      ],
      style: {
        color: prismThemeColors.primitive,
      },
    },
    {
      types: ['boolean'],
      style: {
        color: prismThemeColors.boolean,
      },
    },
    {
      types: ['tag'],
      style: {
        color: prismThemeColors.tag,
      },
    },
    {
      types: ['string'],
      style: {
        color: prismThemeColors.string,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: prismThemeColors.string,
      },
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: prismThemeColors.char,
      },
    },
    {
      types: ['function'],
      style: {
        color: prismThemeColors.function,
      },
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: prismThemeColors.variable,
      },
    },
    {
      types: ['keyword'],
      style: {
        color: prismThemeColors.keyword,
      },
    },
    {
      types: ['at-rule', 'class-name'],
      style: {
        color: prismThemeColors.className,
      },
    },
    {
      types: ['important'],
      style: {
        fontWeight: '400',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
  ],
};
