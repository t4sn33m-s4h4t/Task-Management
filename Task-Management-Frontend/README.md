
# Frontend - Task Management 

## Short Description
This is the frontend of the Task Management Application, built using React and Vite. Users can manage tasks by adding, editing, deleting, and dragging tasks between different categories. The UI is fully responsive, designed to provide a clean, modern, and mobile-friendly experience.

## Live Link
- [Frontend Application](https://examplefrontendlink.com)

## Dependencies

- `axios`: For making API requests to the backend.
- `localforage`: A library for storing data locally in the browser.
- `match-sorter`: Used for sorting tasks.
- `react`: The core React library for building user interfaces.
- `react-beautiful-dnd`: A drag-and-drop library to manage task reordering.
- `react-dom`: The React package for DOM-related functionality.
- `react-router-dom`: For routing and navigation within the app.
- `sort-by`: A utility for sorting tasks.

## Installation Steps

### 1. Clone the repository
```bash
git clone https://github.com/t4sn33m-s4h4t/Task-Management.git
```

### 2. Install dependencies
Navigate to the frontend directory and install the necessary dependencies:
```bash
cd frontend
npm install
```

### 3. Set up environment variables
Create a `.env` file in the frontend directory and add any required environment variables such as Firebase credentials and API URLs.
```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```
### 4. Start the frontend application
To start the development server, run the following:
```bash
npm run dev
```
 

## Technologies Used
- **Frontend**: React, Vite, react-beautiful-dnd
- **API Communication**: Axios
- **Routing**: React Router

## Key Features:
1. **Authentication**: 
   - Google sign-in via Firebase Authentication.
   - Users are authenticated before accessing the app.

2. **Task Management**: 
   - Add, edit, delete, and reorder tasks.
   - Drag-and-drop functionality to move tasks between "To-Do", "In Progress", and "Done" categories.

3. **Real-time Updates**: 
   - Tasks persist after refreshing the page by syncing with the backend.
   - Real-time task updates from the MongoDB database.

4. **Responsive UI**: 
   - The app is fully responsive and works seamlessly on both desktop and mobile devices.