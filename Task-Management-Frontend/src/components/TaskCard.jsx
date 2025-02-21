import React from "react";
import { format, differenceInHours } from "date-fns";
import { useActivityLog } from "../context/ActivityLogContext";

const TaskCard = ({ task, provided, snapshot, isDarkMode, handleEdit, handleDelete }) => {
  const { logActivity } = useActivityLog(); 

  
  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    try {
      return format(new Date(dateString), "MMM dd yyyy");
    } catch (error) {
      return "Invalid date";
    }
  };

  
  const getDueDateColor = (dueDate) => {
    if (!dueDate) return isDarkMode ? "text-gray-400" : "text-gray-600";

    const now = new Date();
    const due = new Date(dueDate);
    const hoursDiff = differenceInHours(due, now);

    if (hoursDiff < 0) return "text-red-500 font-semibold";
    if (hoursDiff < 24) return "text-yellow-500 font-semibold";
    return "text-green-500 font-semibold";
  };

  
  const onEdit = () => {
    handleEdit(task);  
  };
 
  const onDelete = () => {
    handleDelete(task._id); 
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={
        `p-4 rounded-lg w-full
        ${isDarkMode ? "bg-purple-800 text-white" : "bg-purple-100 text-purple-900"}
        ${snapshot.isDragging ? "shadow-lg transform scale-105" : "shadow-sm"}
        transition-all duration-200
        ${!snapshot.isDragging && "hover:shadow-md"}
        ${snapshot.isDragging ? "z-50" : "z-0"}`
      }
      style={provided.draggableProps.style}
    > 
      <div {...provided.dragHandleProps} className="pb-3 cursor-grab">
        <div
          className={`w-6 h-1 rounded-full ${isDarkMode ? "bg-purple-600" : "bg-purple-300"}`}
        />
      </div>
 
      <h3 className="font-semibold text-sm mb-2">{task.title}</h3>
 
      {task.description && (
        <p className={`text-sm mb-3 ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
          {task.description}
        </p>
      )}
 
      <div className="flex justify-between items-center">
      
        <time className={`text-xs ${getDueDateColor(task.dueDate)}`}>
          {task.dueDate ? formatDate(task.dueDate) : "No due date"}
        </time>
 
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 cursor-pointer text-white  text-xs transition-colors"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 cursor-pointer text-white  text-xs transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;