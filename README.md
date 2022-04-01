# GitHub Repo Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

The live demo was deployed on three different cloud servers.

## Deployment
### Google Cloud Platform(GCP)
You can go here, [deployment](https://github-repo-search-react-ewrxmngera-de.a.run.app/).

It was deployed by using Docker

### Vercel
You can go here, [deployment](https://github-repo-search-react.vercel.app/).

### Heroku
You can go here, [deployment](https://nameless-coast-50474.herokuapp.com/).

## Features
- [X] Infinite scroll
- [ ] React Virtualized List
- [X] Nginx proxy
- [X] Lazy Load
- [X] CI/CD
- [X] E2E Testing(with [Cypress](https://www.cypress.io/))
- [ ] Unit Testing(with [Jest](https://jestjs.io/))

## Project Structure
```
src
├── api
│   └── index.js
├── hooks
│   └── useISOtoDate.js
│   └── useEventListener.js
│   └── useHoverLabel.js
├── utils
│   └── constants.js
├── components
│   ├── animations
│   │   │── ErrorAnimation
│   │   │   └── index.js
│   │   │── NotFoundAnimation
│   │   │   └── index.js
│   │   │── SpaceAnimation
│   │   │   └── index.js
│   │   └── LoadingRepoDetailAnimation.js
│   │   └── LoadingRepoListAnimation.js
│   └── Header.js
│   └── RepoDetail.js
│   └── RepoList.js
├── pages
│   ├── exceptions
│   │   └── ErrorPage.js
│   │   └── NotFoundPage.js
│   └── HomePage.js
│   └── RepoDetailPage.js
│   └── RepoListPage.js
├── redux
│   ├── actions
│   │   └── ReposAction.js
│   │   └── UserAction.js
│   ├── reducers
│   │   └── index.js
│   │   └── RepoReducerjs
│   │   └── UserReducerjs
│   └── store
│       └── index.js
└── App.js
└── index.css
└── index.js
└── tailwind.config.js
```

## Get Started

In the project directory, you can run:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
```
$ yarn
$ yarn start
```
Launches the test runner in the interactive watch mode.
```
$ yarn test
$ yarn cypress run
```
Builds the app for production to the `build` folder.
```
$ yarn build
```

## Docker
Run the following command to build the Docker image
```
$ docker build -t app:v1 .
$ docker run -p 8080:8080 app:v1
```
