# Wireframe By SANTIAGO ESPINA

## Hello, this is an App that connects to an api every hour to show recent articles about NodeJs in Hacker News.

`The app client was made with React, Redux, Sass and TypeScript.`
 <br /> `The app api was made with Express, NodeJs, PostgreSQL, MySQL, and JavaScript.`
 
 This project has two folders: `api` and `client`

__IMPORTANT:__ In `api` you will have to create a file called: `.env` with the following variables:
```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost
PORT=3001
```
You have to replace `postgresuser` and `postgrespassword` with your postgres credentials.
It is also necessary that you create a data base in postgres with the name `wireframe`.

For the next steps you have to be in the folders `api` and then `client` and run in the terminal:
```
npm install
```
or 
```
yarn install
```

When all the dependencies are installed, execute in two different terminals:<br />
`In the api folder:`
```
npm start
```
`In the client folder:` 
```
npm start
```

Your browser will open with the application running.
