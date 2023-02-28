<div align=center>
	<h1>Appointment Project</h1>
</div>

<div align="center">
	<a href="https://appointment-project-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/appointment-project-presentation.gif"/>
</div>

## Description

A React app that simulates doctor appointment where appointments can be added and removed for all doctors seperately.

## Goals

Practicing on components, props, react-bootstrap, external styling, array methods chaining(for filtering), use state and use effect hooks.

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
appointment-project(folder)
|
|-- README.md
|-- package-lock.json
|-- package.json
|-- public
|   |-- images
|   |   |-- appointment-project-presentation.gif
|   |-- img
|   |   |-- appointment.jpg
|   |   |-- dr1.jpg
|   |   |-- dr2.jpg
|   |   |-- dr3.jpg
|   |   |-- dr4.jpg
|   |   |-- dr5.jpg
|   |   |-- dr6.jpg
|   |   |-- dr7.jpg
|   |   |-- dr8.jpg
|   |   |-- dr9.jpg
|   |-- index.html
|-- src
|   |-- App.css
|   |-- App.js
|   |-- components
|   |   |-- AddModal.jsx
|   |   |-- Appointment.jsx
|   |   |-- AppointmentList.jsx
|   |   |-- Doctors.jsx
|   |-- helper
|   |   |-- data.jsx
|   |-- index.js
|   |-- pages
|       |-- Home.jsx
|-- yarn.lock
```