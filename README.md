[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Sportsbet.io Design

## Contents

1. [Architecture](#architecture)
2. [Installation](#installation)
3. [Plan](#plan)

---

## Architecture

Our Design System follows the [Smoothie](https://smoothie-css.com/) methodology, publishing key layers as individual `packages/`:

1. [**Assets**](packages/assets/README.md) - common rich media brand assets.
2. [**Tokens**](packages/tokens/README.md) - raw data values that define the Sportsbet.io visual language.
3. [**Global**](packages/global/README.md) - a tiny, crucial set of global styles to provide a solid and consistent foundation.
4. [**Utils**](packages/utils/README.md) - suite of tools to quickly access common token values.
5. [**Components**](packages/components/README.md) - the individual building blocks of our UI.

## Installation

### Prerequisites

* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)

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

## Plan

Initial brainstorm of the project's requirements on Tuesday 8th January 2019:

![Image of initial whiteboard brainstorm](.github/assets/brainstorm.jpg)