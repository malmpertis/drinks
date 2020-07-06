# Drinks

> A React SPA using aws amplify cognito for user Authentication and aws GraphQL api (serverless backend).

### Live app: [https://drinks.betriply.com/](https://drinks.betriply.com/)

## Available Tech

- Google Maps (JavaScript API)
- Google Places API
- Material-UI
- Styled-Components
- Axios
- Moment
- aws-amplify

## CI / CD

> App is deployed on aws. To init automatic deployment simply push an update on master branch!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
Only one test implemented as a POC, unfortunately I didn't have the time to perform more tests

## Tech Debt

- More tests (much more, currently there is only one test as a proof of concept)
- Add guests
- useReducer instead of state in order to be able to subscibe to GraphQL changes
- Implement search functionality
- More sophisticated relationships in the GraphQL API (users with comments and events)
- TYPESCRIPT!!!
