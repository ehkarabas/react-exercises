<div align=center>
	<h1>Movie App</h1>
</div>

<div align="center">
	<a href="https://movie-app-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/movie-app-presentation1.gif"/>
	<img src="./public/images/movie-app-presentation2.gif"/>
	<img src="./public/images/movie-app-presentation3.gif"/>
	<img src="./public/images/movie-app-presentation4.gif"/>
	<p><i>Main Structure</i></p>
	<img src="./public/images/main-structure.png"/>
</div>

## Description

A React app that, by default, lists the most popular movies currently in theaters or filters movies from all films based on the end-user's input, along with the movie's IMDb rating, movie title, movie plot, and movie poster. User registration and login processes are handled using Firebase Authentication. Features such as movie details, favorite movies list, and movie search are exclusive to members and cannot be used without user login. The favorite movies list is stored in local storage. A theme toggling feature is available. The app has a multipage structure with a routing system that displays an error page when an incorrect URL is entered.

## Goals

Practicing on components, props, tailwind, theme toggling, API(get with different query parameters of the API), react-router(private router included), .env(to hide API datas), taostify, Firebase Email/Password and Gmail authentication, useState, useNavigate, useLocation, useParams and useContext(for fetchin & rendering movie data, storing favorite movies and authenticating) hooks.

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
movie-app(folder)
|
|-- README.md
|-- package.json
|-- public
|   |-- images
|   |   |-- ehlogo-transparent.png
|   |   |-- main-structure.png
|   |   |-- movie-app-presentation1.gif
|   |   |-- movie-app-presentation2.gif
|   |   |-- movie-app-presentation3.gif
|   |   |-- movie-app-presetation4.gif
|   |-- index.html
|-- src
|   |-- App.js
|   |-- assets
|   |   |-- icons
|   |       |-- FavIcon.js
|   |       |-- GoogleIcon.js
|   |       |-- avatar.png
|   |-- auth
|   |   |-- firebase-config.js
|   |-- components
|   |   |-- FavComp.jsx
|   |   |-- MovieCard.jsx
|   |   |-- Navbar.jsx
|   |   |-- Switch.jsx
|   |   |-- VideoSection.jsx
|   |-- context
|   |   |-- AuthContext.js
|   |   |-- MovieContext.js
|   |-- helper
|   |   |-- ToastNotify.js
|   |-- index.css
|   |-- index.js
|   |-- pages
|   |   |-- Favorites.jsx
|   |   |-- Login.jsx
|   |   |-- Main.jsx
|   |   |-- MovieDetail.jsx
|   |   |-- NotFound.jsx
|   |   |-- Register.jsx
|   |-- router
|       |-- AppRouter.jsx
|       |-- PrivateRouter.jsx
|-- tailwind.config.js
|-- yarn.lock
```