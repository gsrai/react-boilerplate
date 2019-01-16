# react-boilerplate
My custom react boilerplate, less time setting up and more time developing.

## Requirements

- node.js v9.11 or higher

***

### Usage

#### Development

Step 1: Install dependencies:

```console
npm i
```

Step 2: Run development server

```console
npm run dev
```

Step 3: Open the browser @ http://localhost:8080

##### Production

Step 1: Install dependencies and Build

```console
npm i && npm run build
```

Step 2.a: Start the app

```console
npm run start
```

Step 2.b: Build and run with docker

```console
npm run docker:build
npm run docker:start
```

##### Testing, Linting and Git

Run the tests with the command ```npm run test```.
Run the linter with the command ```npm run lint```
Watch the tests with the command ```npm run test:watch```

There is a precommit hook to git which will run the linter and the unit tests.

***

##### Currently Using

- React 16
- Redux 5
- Webpack 4 w/ hot loading + small modules with hash for browser caching in prod
- babel 6
- Enzyme & Jest w/ code coverage
- React Router 4
- Redux-Saga

##### To Do

- handle static assets like svgs/favicons(ico)/csv etc
- less, sass and stylized components
- Mobx/Thunk/RxObservables
- SSR?
