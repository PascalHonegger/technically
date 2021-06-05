# Technically

## Developing

Once you've cloned the project and installed dependencies with `npm install` start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Linting & Formatting

To ensure a consistent code style we use [Prettier](https://prettier.io/) as a opinionated code formatter and [ESLint](https://eslint.org/) for code linting.

```bash
# run prettier on all files
npm run format

# run eslint on all files
npm run lint
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`.
