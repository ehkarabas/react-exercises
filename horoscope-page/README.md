<div align=center>
	<h1>Horoscope Page</h1>
</div>

<div align="center">
	<a href="https://horoscope-page-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/horoscope-page-presentation.gif"/>
</div>

## Description

Simple react app that stylized with SASS for a horoscope page via rendering mock data on UI.

## Goals

Practicing on SASS, components, mock data, props, external styling.

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
horoscope-page(folder)
|
|-- README.md
|-- package-lock.json
|-- package.json
|-- public
|   |-- images
|   |   |-- horoscope-page-presentation.gif
|   |-- index.html
|-- src
|   |-- App.js
|   |-- App.scss
|   |-- components
|   |   |-- Header
|   |   |   |-- Header.jsx
|   |   |   |-- Header.scss
|   |   |-- Main
|   |   |   |-- Card.jsx
|   |   |   |-- Main.jsx
|   |   |   |-- Main.scss
|   |   |-- Navbar
|   |       |-- Navbar.jsx
|   |       |-- Navbar.scss
|   |-- helpers
|   |   |-- data.js
|   |   |-- logo.png
|   |-- index.js
|   |-- scss
|       |-- _mixins.scss
|       |-- _reset.scss
|       |-- _variables.scss
|-- yarn.lock
```


