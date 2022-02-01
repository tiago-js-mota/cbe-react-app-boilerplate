# Two React Applications Working on the Same Page
> This examples here made to explain how to react applications can live independently on the same page. 
> react-app-1 uses the react-app-2 

>Remove react-libs if you don't want to use storybook

### Front-end technology stack and libs
- [Node.js](https://nodejs.org/en/) LTS
  - **_Important_: Do not use the latest version**
- [ReactJs](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org)
- [SCSS](https://sass-lang.com/) and CSS support
- [Ant Design](https://ant.design)
- [StoryBook](https://storybook.js.org)

## Folder Structure
1. **react-app-1**: Example of a React application that use the `react-app-2` 
2. **react-app-2**: Example of a React application
3. **react-libs**: Internal UI framework based on top of Ant Design; Internal Libraries

## react-app-1 and react-app-2
Before run, build or deploy the application(s) follow the following steps:

1. Change the div `id` inside `index.html` to an unique id
2. Make sure to change `id` referenced on the `getElementById` inside `index.tsx` to the same used before
3. If you're thinking in using more than one react application in on page be sure to change the `filename` of the `output` javascript inside `webpack.common.js`
4. Copy the content of the `build/` directory into the web server

### Install dependencies for each react app
- cd react-app-1
- yarn

### Run dev server
yarn start

### Build
yarn build

## react-libs-cbe
React Libs uses `StoryBook` to visualize the UI components among others.

Storybook helps us build UI components in isolation from your app's business logic, data, and context. That makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during development, testing, or QA.

Browse example stories now by navigating to them in the sidebar. View their code in the `stories/examples` directory to learn how they work. It's recommend building UIs with a component-driven process starting with atomic components and ending with pages.

### Install dependencies for each react app
- cd react-libs-cbe
- yarn

### Run StoryBook
yarn storybook

### Build
yarn build-storybook

To deploy the storybook copy the content of the `/public` directory into the web server

### Use Lib locally without being published
in the project react-app-1 or react-app-2 install lib as a dependency
yarn add "../react-libs-cbe"