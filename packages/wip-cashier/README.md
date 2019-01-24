# Cashier

> **Note**: this package is temporary to ease cashier development alongside the Design System. It will be moved from the repo upon completion.

## Usage

Ensure you are running the commands from the **root** of the repo (to make use of Lerna), **not** the package directory:

```sh
cd ../../
```

Each script in this package can then be run via `yarn cashier <script-name>`:

- `yarn cashier dev` - starts a hot-reloading development environment at [localhost:1234](http://localhost:1234/).
- `yarn cashier build` - creates a static client-side build.
- `yarn cashier serve` - serves the build `dist` directory at [localhost:1234](http://localhost:1234/).
