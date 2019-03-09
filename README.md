# Mattackard.xyz

Mattackard.xyz is my personal website where I host content not always relevant to professional work.

## Running Locally

If for some reason you want to run a copy of website locally, clone the repository and install the dependencies with npm

```
npm install
```

The site is created using create-react-app. To start up a development server use the command

```
npm start
```

This will start up a local development server that will hot-reload with any changes made.

## Deployment

GitHub Pages is used for deployment and the site is set up to deploy using the command

```
npm run deploy
```

This will cause the predeploy and deploy scripts to run which will create a react build in the gh-pages branch of your cloned repository. See the github pages docs linked below for more information on configuring github pages for your deployment.

## Built With

-   [React](https://reactjs.org/docs/getting-started.html) - Front-end framework
-   [Create-React-App](https://facebook.github.io/create-react-app/docs/getting-started) - Boilerplate/ Dev Environment
-   [GitHub Pgaes](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) - Deployment

## License

This project is licensed under the MIT License
