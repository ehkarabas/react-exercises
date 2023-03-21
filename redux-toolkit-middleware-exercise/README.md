<div align=center>
	<h1>Redux Toolkit Middleware Exercise</h1>
</div>

<div align="center">
	<a href="https://redux-toolkit-middleware-ex-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/redux-toolkit-middleware-exercise-presentation.gif"/>
</div>

## Description

Simple React app created with Redux Toolkit and MUI that simulates a news website by fetching data from an API.

## Goals

Practicing on components, redux-toolkit, store, useSelector, useDispatch, createSlice, createAsyncThunk(as middleware for API requests), configureStore hooks, MUI.

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
redux-toolkit-middleware-exercise(folder)
|
|-- README.md
|-- package.json
|-- public
|   |-- images
|   |   |-- redux-toolkit-middleware-exercise-presentation.gif
|   |-- index.html
|-- src
|   |-- App.js
|   |-- app
|   |   |-- store.jsx
|   |-- assets
|   |   |-- loading.gif
|   |-- components
|   |   |-- Navbar.jsx
|   |-- features
|   |   |-- authSlice.jsx
|   |   |-- newsSlice.jsx
|   |-- index.js
|   |-- pages
|   |   |-- Login.jsx
|   |   |-- News.jsx
|   |-- router
|       |-- AppRouter.jsx
|       |-- PrivateRouter.jsx
|-- yarn.lock
```


