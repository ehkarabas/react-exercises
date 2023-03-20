<div align=center>
	<h1>React Redux Exercise</h1>
</div>

<div align="center">
	<a href="https://react-redux-exercise-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/react-redux-exercise-presentation.gif"/>
</div>

## Description

Simple react app for a simple counter via react-redux.

## Goals

Practicing on components, react-redux, redux-toolkit, store(switch-case reducer, actions(types as object, functions returning predefined action objects for dispatch) useSelector, useDispatch, createSlice, combineReducers hooks, tailwind.

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
react-redux-exercise(folder)
|
|-- README.md
|-- package.json
|-- public
|   |-- images
|   |   |-- react-redux-exercise-presentation.gif
|   |-- index.html
|-- src
|   |-- App.js
|   |-- components
|   |   |-- Counter.jsx
|   |-- index.css
|   |-- index.js
|   |-- redux
|       |-- actions
|       |   |-- actionTypes.js
|       |   |-- counterActions.js
|       |-- index.jsx
|       |-- reducers
|       |   |-- counterReducer.js
|       |   |-- counterSlice.js
|       |-- store
|           |-- store.js
|-- tailwind.config.js
|-- yarn.lock
```


