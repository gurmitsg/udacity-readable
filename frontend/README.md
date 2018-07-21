# Readable Project
Project #2 from Udacity's React Nanodegree. The project covers React and Redux. The application allows users to make posts, vote on posts, and comment on them. As part of the project criteria, all state is managed by redux.

## Pre-requisite
- [Node](https://nodejs.org)

## Installation Instructions
The commands below can be used to install and run the application.

```
git clone https://github.com/gurmitsg/udacity-readable
cd frontend
npm install
npm start
```

The npm install command issued from the project's root directory will install all required packages for both the client and server solutions. The Client's packages are installed via the postinstall webpack script of the root. The npm start command uses concurrently to start both the server and client.

The server runs at http://localhost:3001/.
The client runs at http://localhost:3000/.

## About
There are two pieces to the solution:
  1. Server - Developed by Udacity. The Server supplies the application with an API to interact with posts and comments. All files found in the server directory.
  2. Client - This is my solution based on the rubric provided by Udacity. All files are found in the frontend directory.
