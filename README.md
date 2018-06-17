# react-boilerplate
My custom react boilerplate, less time setting up and more time developing.

### Requirements
  - node.js v9.11 or higher
  - yarn

***

### Usage

##### Development

Step 0: Install yarn

```
npm i -g yarn
```

Step 1: Install dependencies:

```
yarn
```

Step 2: Run development server

```
yarn run dev
```

Step 3: Open the browser @ http://localhost:8080

##### Production

Step 1: Install dependencies and Build

```
yarn && yarn run build
```

Step 2.a: Start the app

```
yarn start
```

Step 2.a: Build and run with docker

```
yarn run docker:build
yarn run docker:start
```

##### Testing, Linting and Git

Run the tests with the command ```yarn run test```.
Run the linter with the command ```yarn run lint```
Watch the tests with the command ```yarn run test:watch```

There is a precommit hook to git which will run the linter and the unit tests.

***

##### Currently Using
- React 16
- Redux 5
- Webpack 4 w/ hot loading + small modules with hash for browser caching in prod
- babel 6
- Enzyme & Jest w/ code coverage

##### To Do
- move config files to single directory
- make utils/helpers (ErrorBoundary) and config/properties file for app
- handle static assets like svgs/favicons(ico)/csv etc
- add react router
- less, sass and stylized components
- SSR?
- Sagas/Thunk/RxObservables
- Mobx

Up to date as of June 2018, god JS moves fast :p

Babel 7 will be out soon
Webpack 5 too...
