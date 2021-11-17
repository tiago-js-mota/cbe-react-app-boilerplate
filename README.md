# Two React Applications Working on the Same Page
> This examples here made to explain how to react applications can live independently on the same page. 
> react-app-1 uses the react-app-2 

# `Do the following steps for each react applications`

## Application deploy

Before run, build or deploy the application follow the following steps:

1. Change the div `id` inside `index.html` to an unique id 
1. Make sure to change `id` referenced on the `getElementById` inside `index.tsx`
1. If you're thinking in using more than one react application in on page be sure to change the `filename` of the `output` javascript inside `webpack.common.js`
1. Copy the content of the `build/` directory into your web server
1. If your running the dev server make sure all apps have different ports.

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
