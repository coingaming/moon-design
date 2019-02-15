import { css } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';

/**
 * Modified Prism Theme
 *
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */
export const syntaxStyles = css`
  code,
  pre {
    color: #ccc;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.8rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }
  /* Code blocks */
  pre {
    padding: 1em;
    overflow: auto;
  }
  :not(pre) > code,
  pre {
    background: ${colors.neutral[70]};
  }
  /* Inline code */
  :not(pre) > code {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }
  .token.punctuation {
    color: #ccc;
  }
  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }
  .token.function-name {
    color: #6196cc;
  }
  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }
  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }
  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }
  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.inserted {
    color: green;
  }
`;
