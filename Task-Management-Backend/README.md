# Backend - Task Management 

## Short Description
A simple, responsive task management application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. Changes are saved instantly to the MongoDB database to maintain persistence.

## Live Links
- [Backend API](https://task-management-backend-blush.vercel.app/)

### Backend
- Express.js
- MongoDB

## Installation Steps

### Clone the repository
```bash
git clone https://github.com/t4sn33m-s4h4t/Task-Management.git
```


### Install backend dependencies
Navigate to the backend directory and install the required dependencies.
```bash
cd backend
npm install
```

### Set up environment variables
- Create a `.env` file in the backend directory.
- Add the necessary credentials for MongoDB URI.
```bash
PORT=
MONGO_URI=
```

### Start the application
- Start the backend server:
```bash
cd backend
npm start
```

## Technologies Used
- Express.js, MongoDB, CORS, Mongoose

## Backend API:
   - Set up API routes for CRUD operations:
     - `POST /tasks`: Add a new task.
     - `GET /tasks`: Retrieve all tasks for the logged-in user.
     - `PUT /tasks/:id`: Update task details (title, description, category).
     - `DELETE /tasks/:id`: Delete a task.
   - Register new Users:
     - `POST /users`: Add a new User. 

 