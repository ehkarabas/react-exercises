<div align=center>
	<h1>Store Typescript & Redux</h1>
</div>

<div align="center">
	<a href="https://store-typescript-redux-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/store-typescript-redux-presentation.gif"/>
</div>

## Description

Simple React app for a basic store page using TypeScript with Redux.

## Goals

Practicing on typescript in react, props, components, tailwind, axios, redux, redux-toolkit(slices, configureStore), redux-persist, react-toastify, React hooks.

## Installation

To run this app on your local, run commands below on the terminal:

1. Clone main repo on your local.
    ```shell
    $ git clone https://github.com/ehkarabas/react-exercises.git
    ```

2. Install node modules to this sub-repo.
    ```shell
    $ yarn install
    
    or

    $ npm install
    ```

3. Run the app on your browser.
    ```shell
    $ yarn start
    
    or

    $ npm start
    ```

## Resource Structure 

```
store-typescript-redux(folder)
|
|-- README.md
|-- package.json
|-- public
|   |-- images
|   |   |-- store-typescript-redux-presentation.gif
|   |-- index.html
|-- src
|   |-- App.tsx
|   |-- app
|   |   |-- hooks.ts
|   |   |-- store.ts
|   |-- components
|   |   |-- Card.tsx
|   |   |-- Navbar.tsx
|   |   |-- SearchComp.tsx
|   |-- features
|   |   |-- productsSlice.ts
|   |-- helper
|   |   |-- ToastNotify.tsx
|   |-- index.css
|   |-- index.tsx
|   |-- models
|   |   |-- models.ts
|   |-- pages
|   |   |-- FavoritesPage.tsx
|   |   |-- Home.tsx
|   |-- react-app-env.d.ts
|-- tailwind.config.js
|-- tsconfig.json
|-- yarn-error.log
|-- yarn.lock
```


