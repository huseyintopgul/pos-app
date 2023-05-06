<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs, Tailwind CSS, AntDesing,
</p>

<p align="center">
   <a href="https://github.com/huseyintopgul">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download

```terminal
$ git clone https://github.com/huseyintopgul/pos-app
$ yarn # or npm i
```

## project structure

```terminal
LICENSE
package.json
api/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 4000)

```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 10000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd api
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

### Start

```terminal
$ cd api   // go to api folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [render.com](https://dashboard.render.com/)

```api
   Web Service
- Branch - main/master
- Root Directory - ./api
- Environment - Node
- Build Command - api/ npm install
- Start - npm start
- Advenced
      key: MONGO_URİ
      value: (You need to add a MONGO_URİ in .env to connect to MongoDB)
- Create Web Service

   Static Site
- Branch - main/master
- Root Directory - ./client
- Build Command - client/ npm run build
- Publish Directory - client/ build
- Advenced
      key: REACT_APP_SERVER_URL
      value: (You need to add a REACT_APP_SERVER_URL (https://"--applicationNameArea--"0tak.onrender.com / https://pos-application-api-0tak.onrender.com)
- Create Static Site


```

# Dependencies(tech-stacks)

| Client-side                                        | Api-side              |
| -----------------------------                      | --------------------- |
| ant-design/plots: "^1.2.5"                         | bcryptjs": "^2.4.3"   |
| reduxjs/toolkit: "^1.9.4"                          | cors": "^2.8.5"       |
| testing-library/jest-dom: "^5.16.5"                | dotenv": "^16.0.3"    |
| testing-library/react: "^13.4.0"                   | express": "^4.18.2"   |
| testing-library/user-event: "^13.5.0"              | mongoose": "^7.0.3"   |
| antd: "^5.3.3"                                     | morgan": "^1.10.0"    |
| react: "^18.2.0"                                   | nodemon": "^2.0.22"   |
| react-dom: "^18.2.0"                             
| react-highlight-words: "^0.20.0"                 
| react-redux: "^8.0.5"
| react-router-dom: "^6.10.0"
| react-scripts: "5.0.1"
| react-to-print: "^2.14.12"
| web-vitals: "^2.1.4"
| Tailwind CSS


## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/huseyintopgul/pos-app/issues) (preferred)

Email Me: huseyintopgul1@gmail.com (welcome, say hi)

## Author

[Huseyin Topgul](https://www.linkedin.com/in/huseyin-topgul/)

