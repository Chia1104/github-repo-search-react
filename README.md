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
- [X] Nginx proxy
- [ ] Lazy Load
- [ ] Performance
- [ ] Unit Testing

## Project Structure
```
src
├── api
│   └── index.js
├── hooks
│   └── useISOtoDate.js
├── utils
│   └── constants.js
├── components
│   ├── animations
│   │   └── ErrorAnimation.js
│   │   └── LoadingRepoDetailAnimation.js
│   │   └── LoadingRepoListAnimation.js
│   │   └── NotFoundAnimation.js
│   │   └── SpaceAnimation.js
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
