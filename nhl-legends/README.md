<div align=center>
	<h1>NHL Legends</h1>
</div>

<div align="center">
	<a href="https://nhl-legends-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/nhl-legends-presentation.gif"/>
</div>

## Description

A React app that renders NHL player cards on the user interface using mock data and filters them based on the input of the end user.

## Goals

Practicing on components, props, react-bootstrap, external styling, SASS, array methods chaining(for filtering), use state hook.

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
nhl-legends(folder)
|
|-- README.md
|-- package.json
|-- public
|   |-- images
|   |   |-- nhl-legends-presentation.gif
|   |-- index.html
|   |-- nhl-logo.png
|-- src
|   |-- App.js
|   |-- app.scss
|   |-- assets
|   |   |-- nhl-logo.png
|   |-- components
|   |   |-- card
|   |   |   |-- CardContainer.jsx
|   |   |   |-- PlayerCard.jsx
|   |   |-- header
|   |       |-- Header.jsx
|   |-- helpers
|   |   |-- data-nhl.js
|   |-- index.js
|   |-- scss
|       |-- _mixins.scss
|       |-- _reset.scss
|       |-- _variables.scss
|-- yarn.lock
```


