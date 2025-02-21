import React from "react";
import { format } from "date-fns";

const TaskCard = ({ task, provided, snapshot, isDarkMode, handleEdit, handleDelete }) => {
  const formatDate = (dateString) => {
    console.log(task)
    if (!dateString) return "No date";
    try {
      return format(new Date(dateString), "MMM dd, HH:mm");
    } catch (error) {
      return "Invalid date";
    }
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`
        p-4 rounded-lg w-full
        ${isDarkMode ? "bg-purple-800 text-white" : "bg-purple-100 text-purple-900"}
        ${snapshot.isDragging ? "shadow-lg transform scale-105" : "shadow-sm"}
        transition-all duration-200
        ${!snapshot.isDragging && "hover:shadow-md"}
        ${snapshot.isDragging ? "z-50" : "z-0"}
      `}
      style={provided.draggableProps.style}
    >
      
      <div {...provided.dragHandleProps} className="pb-3 cursor-grab">
        <div
          className={`w-6 h-1 rounded-full ${
            isDarkMode ? "bg-purple-600" : "bg-purple-300"
          }`}
        />
      </div>


      <h3 className="font-semibold text-sm mb-2">{task.title}</h3>


      {task.description && (
        <p
          className={`text-sm mb-3 ${
            isDarkMode ? "text-purple-300" : "text-purple-700"
          }`}
        >
          {task.description}
        </p>
      )}


      <div className="flex justify-between items-center">


        <time
          className={`text-xs ${
            isDarkMode ? "text-purple-400" : "text-purple-600"
          }`}
        >
          {
            
          formatDate(task.timestamp)
          }
        </time>


        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(task)}
            className="text-blue-400 cursor-pointer hover:text-blue-500 text-xs transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(task._id)}
            className="text-red-400 cursor-pointer hover:text-red-500 text-xs transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;