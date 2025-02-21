import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { getTasks, updateTask, deleteTask, addTask } from "../services/taskService";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import { useActivityLog } from "../context/ActivityLogContext";  
import { EditTaskModal, AddTaskModal } from "./Modal";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Column from "./Column";
import ActivityLog from "./ActivityLog";

const TaskBoard = () => {
  const { user } = useUser();
  const { isDarkMode } = useTheme();
  const { logActivity } = useActivityLog();  
  const [tasks, setTasks] = useState({
    "To-Do": [],
    "In Progress": [],
    Done: [],
  });
  const [editingTask, setEditingTask] = useState(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "To-Do",
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks(user.uid);
      const categorizedTasks = { "To-Do": [], "In Progress": [], Done: [] };
      fetchedTasks.forEach((task) => categorizedTasks[task.category].push(task));
      setTasks(categorizedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDragEnd = async (result) => {
    setIsDragging(false);
    const { source, destination } = result;
    if (!destination) return;
  
    try {
      const sourceCategory = source.droppableId;
      const destinationCategory = destination.droppableId;
      const sourceItems = Array.from(tasks[sourceCategory]);
      const [movedItem] = sourceItems.splice(source.index, 1);
  
      if (sourceCategory === destinationCategory) {
        sourceItems.splice(destination.index, 0, movedItem);
        setTasks((prev) => ({ ...prev, [sourceCategory]: sourceItems }));
      } else {
        const destinationItems = Array.from(tasks[destinationCategory]);
        movedItem.category = destinationCategory;
        destinationItems.splice(destination.index, 0, movedItem);
        setTasks((prev) => ({
          ...prev,
          [sourceCategory]: sourceItems,
          [destinationCategory]: destinationItems,
        }));
      }
  
      await updateTask(movedItem._id, {
        category: destinationCategory,
        order: destination.index,
      });
  
      
      if (sourceCategory !== destinationCategory) {
        logActivity(`Task "${movedItem.title}" moved from ${sourceCategory} to ${destinationCategory}.`);
      }
    } catch (error) {
      console.error("Error updating task position:", error);
      fetchTasks();
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSave = async (updatedTask) => {
    try {
      await updateTask(updatedTask._id, updatedTask);
      setEditingTask(null);
      fetchTasks();

      
      logActivity(`Task "${updatedTask.title}" was edited.`);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = (taskId) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this task?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const task = tasks["To-Do"].concat(tasks["In Progress"], tasks["Done"]).find((t) => t._id === taskId);
              await deleteTask(taskId);
              fetchTasks();

              
              logActivity(`Task "${task.title}" was deleted.`);
            } catch (error) {
              console.error("Error deleting task:", error);
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleAddTask = async (taskData) => {
    try {
      await addTask({ ...taskData, userId: user.uid });
      setIsAddTaskModalOpen(false);
      setNewTask({ title: "", description: "", category: "To-Do" });
      fetchTasks();

      
      logActivity(`Task "${taskData.title}" was created.`);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div
      className={`min-h-screen md:p-6 py-6 rounded-md px-1 ${
        isDarkMode ? "bg-purple-900 text-white" : "bg-purple-100 text-purple-900"
      } transition-colors duration-300`}
    >
      <button
        onClick={() => setIsAddTaskModalOpen(true)}
        className={`
          fixed cursor-pointer bottom-6 right-6 md:bottom-8 md:right-8
          ${isDarkMode ? "bg-purple-600" : "bg-purple-500"}
          text-white p-4 rounded-full shadow-lg
          hover:transform hover:scale-110 hover:bg-purple-700
          transition-transform duration-200 z-10
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <DragDropContext
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(result) => {
          setIsDragging(false);
          handleDragEnd(result);
        }}
      >
        <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3">
          {Object.keys(tasks).map((category) => (
            <Column
              key={category}
              category={category}
              tasks={tasks[category]}
              isDarkMode={isDarkMode}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </DragDropContext>

      <EditTaskModal
        isOpen={!!editingTask}
        task={editingTask}
        onClose={() => setEditingTask(null)}
        onSave={handleSave}
        categories={Object.keys(tasks)}
      />
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAdd={handleAddTask}
        categories={Object.keys(tasks)}
      />

      <ActivityLog />
    </div>
  );
};

export default TaskBoard;