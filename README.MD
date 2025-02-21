
# Task Management Application

## Short Description
A simple, responsive task management application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. Changes are saved instantly to the MongoDB database to maintain persistence.

## Live Links
- [Frontend](https://examplefrontendlink.com)
- [Backend API](https://examplebackendlink.com)

## Dependencies

### Frontend
- React
- Vite
- react-beautiful-dnd 
- Firebase Authentication
- Axios  

### Backend
- Express.js
- MongoDB
- Firebase Admin SDK

## Installation Steps

### 1. Clone the repository
```bash
git clone https://github.com/t4sn33m-s4h4t/Task-Management.git
```

### 2. Install frontend dependencies
Navigate to the frontend directory and install the required dependencies.
```bash
cd frontend
npm install
```

### 3. Install backend dependencies
Navigate to the backend directory and install the required dependencies.
```bash
cd backend
npm install
```

### 4. Set up environment variables
- Create a `.env` file in backend and `.env.local` in frontend directory.
- Add the necessary credentials for Firebase Authentication and MongoDB URI.

### 5. Start the application
- Start the backend server:
```bash
cd backend
npm start
```
- Start the frontend server:
```bash
cd frontend
npm run dev
```
 

## Technologies Used
- Frontend: React, Vite, Firebase Authentication, react-beautiful-dnd
- Backend: Express.js, MongoDB, CORS, Mongoose
- Database: MongoDB
- Authentication: Firebase Authentication (Google sign-in)

## Key Features & Requirements
1. **Authentication:** 
   - Only authenticated users can access the app.
   - Firebase Authentication (Google sign-in) is used for user login.
   - Store user details (User ID, email, and display name) in the database upon first login.
   
2. **Task Management System:**
   - Users can add, edit, delete, and reorder tasks.
   - Tasks can be categorized into: To-Do, In Progress, and Done.
   - Users can drag tasks between categories.
   - Tasks will be instantly saved in the database.
   - Each task has a Title, Description, Timestamp, and Category.

3. **Database & Persistence:**
   - MongoDB (via Express.js) stores tasks.
   - Real-time updates ensure persistence even after a page refresh.
   - Tasks are deleted from the database permanently.

4. **Frontend UI:**
   - A clean, modern, and responsive UI with dark theme. 
   - The app is fully responsive and works smoothly on both desktop and mobile devices.

5. **Backend API:**
   - Set up API routes for CRUD operations:
     - `POST /tasks`: Add a new task.
     - `GET /tasks`: Retrieve all tasks for the logged-in user.
     - `PUT /tasks/:id`: Update task details (title, description, category).
     - `DELETE /tasks/:id`: Delete a task.
   - Register new Users:
     - `POST /users`: Add a new User. 

 