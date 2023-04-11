# Moon Design System

[![npm (scoped)](https://img.shields.io/npm/v/@heathmont/moon-components)](https://www.npmjs.com/package/@heathmont/moon-components)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![CircleCI](https://circleci.com/gh/coingaming/moon-design.svg?style=svg&circle-token=ac2a5739dd256e22f8051c19548bc06aec8b4350)](https://circleci.com/gh/coingaming/moon-design)

<img width="644" alt="Moon Design System" src="https://user-images.githubusercontent.com/232199/133601344-e63bd62f-dd0f-47a1-9d1e-b5cb065e5a90.png">

## Installing Moon Design

0. Install pnpm:


   ```sh
   npm install -g pnpm@latest
   ```


1. Install dependencies and link local packages together:

   ```sh
   pnpm install
   ```

2. Compile and build all packages:

   ```sh
   pnpm run build
   ```

3. Run storybook for development:

   ```sh
   pnpm run next dev
   ```

4. Hot Module Replacement:

   ```sh
   pnpm run watch
   ```

   ```sh
   pnpm run next dev
   ```

5. Build and run storybook for production at `localhost:80`:

   ```sh
   pnpm run next build
   ```

   ```sh
   pnpm run next start
   ```


## Resources

- 📖 [Documentation](https://moon.io)


## Architecture

Our [pnpm](https://pnpm.io/motivation) monorepo publishes key layers as individual `@heathmont/moon-` packages:

1. [`next-docs/`](#docs) - style guide and documentation
2. [`packages/`](#design-system) - Moon Design System

`packages/`

1. [**Themes**](packages/themes/README.mdx) - theming feature
2. [**Utils**](packages/utils/README.md) - suite of tools to quickly access common token values.
3. [**Icons**](packages/components/README.mdx) - React components for each icon.
4. [**Core**](packages/components/README.md) - the individual building blocks of our UI.

Packages are developed inside their respective `src` folders, utilising [pnpm workspaces](https://pnpm.io/workspaces) for dependency linking/sharing. Distributable code is generated in each package's `lib` by the typeScript compiler.

### Docs

`next-docs/`

Our project's style guide and documentation is built using [Next.js](https://nextjs.org/) inside its own individual package directory.


## Contributing

See the [Contributing Guidelines](CONTRIBUTING.md) for full info.
