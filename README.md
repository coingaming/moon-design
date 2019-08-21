# Sportsbet.io Design

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CircleCI](https://circleci.com/gh/coingaming/sportsbet-design.svg?style=svg&circle-token=ac2a5739dd256e22f8051c19548bc06aec8b4350)](https://circleci.com/gh/coingaming/sportsbet-design)

## Contents

1. [Architecture](#architecture)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Plan](#plan)

---

## Architecture

Our [Lerna](https://github.com/lerna/lerna) monorepo publishes key layers as individual `@heathmont/sportsbet-` packages:

1. [`docs/`](#docs) - style guide and documentation
2. [`packages/`](#design-system) - the Sportsbet.io design system

Packages are developed inside their respective `src` folders, utilising [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) for dependency linking/sharing. Distributable code is generated in each package's `lib` by the [TypeScript compiler](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#compiling-your-code) on build/publish.

### Docs

`docs/`

Our project's style guide and documentation is built using [Gatsby](https://www.gatsbyjs.org/) inside its own individual package directory. See [usage](#docs-2) for more info.

### Design System

`packages/`

1. [**Assets**](packages/assets/README.md) - common rich media brand assets.
2. [**Tokens**](packages/tokens/README.md) - raw data values that define the Sportsbet.io visual language.
3. [**Global**](packages/global/README.mdx) - a tiny, crucial set of global styles to provide a solid and consistent foundation.
4. [**Utils**](packages/utils/README.md) - suite of tools to quickly access common token values.
5. [**Objects**](packages/utils/README.md) - structural components without cosmetic features for common layouts.
6. [**Icons**](packages/components/README.mdx) - React components for each icon.
7. [**Components**](packages/components/README.md) - the individual building blocks of our UI.

### Setup

1. Install the above [prerequisites](#prerequisites).
2. Clone the repository:

   ```sh
   git clone git@github.com:coingaming/sportsbet-design.git
   ```

3. Install dependencies and link local packages together:

   ```sh
   yarn
   ```

## Usage

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
- `yarn publish` - bumps package versions based on the [conventional commits specification](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits) and publishes.
- `yarn update:packages` - a wizard to update Lerna package dependencies.

### Docs

- `yarn docs:dev` - spins up a hot reloading docs environment at [localhost:8000](http://localhost:8000/).
- `yarn docs:build` - generates a static production build of the style guide in `.docs/public`.
- `yarn docs:serve` - serves files created by the build script at [localhost:9000](http://localhost:9000/).

[Static](https://www.gatsbyjs.org/docs/static-folder/) assets (such as fonts) are automatically copied over from [`packages/assets`](packages/assets/README.md) before build.

## Contributing

See the [Contributing Guidelines](CONTRIBUTING.md) for full info.
