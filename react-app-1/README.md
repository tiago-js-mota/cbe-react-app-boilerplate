#Ciberbit React Application Boilerplate

## Application deploy

Before run, build or deploy the application follow the following steps:

1. Change the div `id` inside `index.html` to an unique id 
1. Make sure to change `id` referenced on the `getElementById` inside `index.tsx`
1. If you're thinking in using more than one react application in on page be sure to change the `filename` of the `output` javascript inside `webpack.common.js`
1. Copy the content of the `build/` directory into your web server

## Download the starter kit

npx degit https://github.com/gopinav/React-TypeScript-Webpack-Starter my-app

## Install dependencies

cd react-app-1 &&
yarn

## Run dev server

yarn start

## Build

yarn build

## Run StoryBook

yarn storybook

## Build StoryBook

yarn build-storybook
