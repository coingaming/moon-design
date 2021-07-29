# Moon Design System

[![npm (scoped)](https://img.shields.io/npm/v/@heathmont/moon-components)](https://www.npmjs.com/package/@heathmont/moon-components)

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CircleCI](https://circleci.com/gh/coingaming/moon-design.svg?style=svg&circle-token=ac2a5739dd256e22f8051c19548bc06aec8b4350)](https://circleci.com/gh/coingaming/moon-design)

<img width="800" alt="0 0 - Cover" src="https://user-images.githubusercontent.com/232199/116694400-e75ab680-a9c7-11eb-8de6-71b3e2ba7038.png">

## Installing Moon Design

1. Install dependencies and link local packages together:

   ```sh
   yarn
   ```

2. Compile and build all packages:

   ```sh
   yarn build
   ```
3. Compile and build storybook:

   ```sh
   yarn next build
   ```

4. Run locally at [`:3000`](http://localhost:3000):

   ```sh
   yarn next start
   ```

## Using Moon Design

- `yarn next start` - serve the docs locally at [`:3000`](http://localhost:3000).
- `yarn commit` - CLI to write git commits in our [preferred format](CONTRIBUTING#commits).
- `yarn build` - compiles a distributable `lib` folder for each package.
  - Additional [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) can be appended to the command.
- `yarn format` - [Prettier](https://prettier.io) alias.
- `yarn lint` - lint all JavaScript and TypeScript.
- `yarn test` - runs the [Jest](https://jestjs.io) testing suite.
  - Obsolete tests can be updated via the additional `-u` flag.
  - Additional [Jest options](https://jestjs.io/docs/en/cli) can be appended to the command.
- `yarn clean` - removes all generated `lib` folders.
- `yarn nuke` - removes all generated `lib` folders **and** `node_modules`.
- `yarn publish:packages` - bumps package versions based on the [conventional commits specification](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits) and publishes.
  - Additional `@alpha` and `@beta` suffixes create a tagged release for testing purposes.
- `yarn update:packages` - a wizard to update Lerna package dependencies.

## Resources

- 📖 [Documentation](https://moon.io)

## Contents

1. [Architecture](#architecture)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Plan](#plan)

---

## Architecture

Our [Lerna](https://github.com/lerna/lerna) monorepo publishes key layers as individual `@heathmont/moon-` packages:

1. [`next-docs/`](#docs) - style guide and documentation
2. [`packages/`](#design-system) - Moon Design System

Packages are developed inside their respective `src` folders, utilising [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) for dependency linking/sharing. Distributable code is generated in each package's `lib` by the [TypeScript compiler](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#compiling-your-code) on build/publish.

### Docs

`next-docs/`

Our project's style guide and documentation is built using [Next.js](https://nextjs.org/) inside its own individual package directory.

### Design System

`packages/`

1. [**Assets**](packages/assets/README.md) - common rich media brand assets.
2. [**Themes**](packages/themes/README.mdx) - theming feature
3. [**Utils**](packages/utils/README.md) - suite of tools to quickly access common token values.
4. [**Icons**](packages/components/README.mdx) - React components for each icon.
5. [**Components**](packages/components/README.md) - the individual building blocks of our UI.

### Setup

1. Install the above [prerequisites](#prerequisites).
2. Clone the repository:

   ```sh
   git clone git@github.com:coingaming/moon-design.git
   ```

3. Install dependencies and link local packages together:

   ```sh
   yarn
   ```

4. Build packages:

   ```sh
   yarn build
   ```

5. Build storybook:

   ```sh
   yarn next build
   ```

6. Run storybook:

   ```sh
   yarn next start
   ```

## Usage

- `yarn start` - serve the docs locally at [`:3000`](http://localhost:3000) with hot reloading.
- `yarn commit` - CLI to write git commits in our [preferred format](CONTRIBUTING#commits).
- `yarn build` - compiles a distributable `lib` folder for each package.
  - Additional [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) can be appended to the command.
- `yarn format` - [Prettier](https://prettier.io) alias.
- `yarn lint` - lint all JavaScript and TypeScript.
- `yarn test` - runs the [Jest](https://jestjs.io) testing suite.
  - Obsolete tests can be updated via the additional `-u` flag.
  - Additional [Jest options](https://jestjs.io/docs/en/cli) can be appended to the command.
- `yarn clean` - removes all generated `lib` folders.
- `yarn nuke` - removes all generated `lib` folders **and** `node_modules`.
- `yarn publish:packages` - bumps package versions based on the [conventional commits specification](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits) and publishes.
  - Additional `@beta` suffix creates a tagged release for testing purposes.
- `yarn update:packages` - a wizard to update Lerna package dependencies.

## Contributing

See the [Contributing Guidelines](CONTRIBUTING.md) for full info.
