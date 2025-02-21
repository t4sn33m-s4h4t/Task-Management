import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Column = ({ category, tasks, isDarkMode, handleEdit, handleDelete }) => {
  return (
    <Droppable droppableId={category}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`
            p-6 rounded-lg shadow-lg
            ${
              isDarkMode
                ? "bg-purple-900 text-white"
                : "bg-purple-100 text-purple-900"
            }
            ${
              snapshot.isDraggingOver
                ? isDarkMode
                  ? "bg-purple-800"
                  : "bg-purple-200"
                : ""
            }
            transition-all duration-300
            flex-1
            min-w-[300px]
            border-2 border-transparent
            ${
              snapshot.isDraggingOver
                ? "border-purple-500"
                : "hover:border-purple-400"
            }
          `}
        >
          <h2
            className={`text-2xl font-extrabold mb-4 px-2 border-b-2 pb-2 ${
              isDarkMode ? "border-purple-700" : "border-purple-300"
            }`}
          >
            {category}
          </h2>
          <div className="flex flex-col gap-3 min-h-[50px]">
            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided, snapshot) => (
                  <TaskCard
                    task={task}
                    provided={provided}
                    snapshot={snapshot}
                    isDarkMode={isDarkMode}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;