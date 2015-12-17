# Voting application

## Overview

This is my implementation of the voting application, which is the 1st basejump on freecodecamp

# Quick Start Guide

### Prerequisites

In order to use the voting application, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Git](https://git-scm.com/)

### Installation & Startup

To install the voting app, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/paycoguy/voting-app.git your-project
```

This will install the voting app components into the `your-project` directory.

### Setup GitHub Authentication

Please follow [this guide](http://www.clementinejs.com/tutorials/tutorial-passport.html#GitHubAppSetup) to register the application with GitHub and get API keys / secrets.

### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
GITHUB_KEY=your-client-id-here
GITHUB_SECRET=your-client-secret-here
MONGO_URI=mongodb://localhost:27017/clementinejs
PORT=8080
APP_URL=http://localhost:8080/
```

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!

## Features

| Features 
|:---------         
| MongoDB           
| Express  
| React  
| Node.js         
| Passport         
| Mongoose        

## License

MIT License. [Click here for more information.](LICENSE.md)
