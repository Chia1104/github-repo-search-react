# GitHub Repo Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

This is a simple GitHub repository viewer app built with React.js, and uses the [GitHub API](https://developer.github.com/v3/).

Using Redux to manage globe state, and React Router to manage routing.

## Languages and Tools

<div align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
  </a>
  <a href="https://redux.js.org" target="_blank" rel="noreferrer"> 
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> 
  </a>
  <a href="https://www.cypress.io" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/>
  </a>
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> 
  </a> 
  <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40"/> 
  </a>
</div>

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
│   └── RepoDetailModal.js
│   └── RepoList.js
│   └── AlertLabel.js
│   └── HoverLabel.js
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
