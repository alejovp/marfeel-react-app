# marfeel-react-app

This is a React dummy app created with [styled-components](https://styled-components.com/docs), [jest](https://jestjs.io/docs/en/getting-started) and [enzyme](https://enzymejs.github.io/enzyme/?utm_source=next.36kr.com). No http services or local routing have been implemented.
Base project tooling includes node, webpack, babel and eslint.

## Setup:

Builded using node `v14.15.0`.

Clone this repo and at the root level run:
```
$ npm i
```

## Running the project:

In order to run the project just do:
```
$ npm run dev
```

This will create the app bundle, run eslint, a local server on port `8081` with hot reloading and open a browser window pointing to this server.

For unit testing:
```
$ npm run test
```
or for code coverage:
```
$ npm run test-coverage
```

A mocked theme it's located here: `__mocks__/theme.json` and you can change values while the project is running and see how the app will look like.