import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useTheme } from '../context/ThemeContext';

export const EditTaskModal = ({
  isOpen,
  task,
  onClose,
  onSave,
  categories = ["To-Do", "In Progress", "Done"]
}) => {
  const { isDarkMode } = useTheme();
  const [editedTask, setEditedTask] = React.useState({
    title: '',
    description: '',
    category: 'To-Do',
    dueDate: ''
  });


  useEffect(() => {
    if (task) {
      setEditedTask({ ...task });
    }
  }, [task]);

  const handleSave = () => {
    if (editedTask.title.trim() === '') {
      alert('Title is required!');
      return;
    }
    onSave(editedTask);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`modal ${isDarkMode ? 'bg-purple-900 text-white' : 'bg-purple-100 text-purple-900'
        } p-6 rounded-lg w-11/12 max-w-md mx-auto mt-20 shadow-lg`}
      overlayClassName="overlay fixed inset-0 bg-[#19002d7d] bg-opacity-50 flex items-start justify-center p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <input
        type="text"
        placeholder="Title*"
        maxLength={50}
        value={editedTask?.title || ''}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
        className={`w-full p-3 mb-3 border rounded text-sm ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      <textarea
        placeholder="Description"
        maxLength={200}
        value={editedTask?.description || ''}
        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
        className={`w-full p-3 mb-3 border rounded text-sm h-24 ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      <select
        value={editedTask?.category || 'To-Do'}
        onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value })}
        className={`w-full p-3 mb-4 border rounded text-sm ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={editedTask.dueDate ? editedTask.dueDate.split('T')[0] : ''}
        onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
        className={`w-full p-3 mb-3 border rounded text-sm ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />

      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className={`cursor-pointer px-4 py-2 rounded ${isDarkMode
            ? 'text-gray-300 hover:text-white'
            : 'text-purple-700 hover:text-purple-900'
            } text-sm transition-colors`}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="cursor-pointer px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm transition-colors"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
};

export const AddTaskModal = ({
  isOpen,
  onClose,
  onAdd,
  categories = ["To-Do", "In Progress", "Done"]
}) => {
  const { isDarkMode } = useTheme();
  const [newTask, setNewTask] = React.useState({
    title: '',
    description: '',
    category: 'To-Do',
    dueDate: ''
  });

  const handleAdd = () => {
    if (newTask.title.trim() === '') {
      alert('Title is required!');
      return;
    }
    onAdd(newTask);
    setNewTask({ title: '', description: '', category: 'To-Do', dueDate: '' });
  };

  React.useEffect(() => {
    if (!isOpen) {
      setNewTask({ title: '', description: '', category: 'To-Do', dueDate: '' });
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`modal ${isDarkMode ? 'bg-purple-900 text-white' : 'bg-purple-100 text-purple-900'
        } p-6 rounded-lg w-11/12 max-w-md mx-auto mt-20 shadow-lg`}
      overlayClassName="overlay fixed inset-0 bg-[#19002d7d] bg-opacity-50 flex items-start justify-center p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Title*"
        maxLength={50}
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className={`w-full p-3 mb-3 border rounded text-sm ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      <textarea
        placeholder="Description"
        maxLength={200}
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className={`w-full p-3 mb-3 border rounded text-sm h-24 ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      <select
        value={newTask.category}
        onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
        className={`w-full p-3 mb-4 border rounded text-sm ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={newTask.dueDate}
        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        className={`w-full p-3 mb-3 border rounded text-sm ${isDarkMode
          ? 'bg-purple-800 border-purple-700 text-white'
          : 'bg-white border-purple-300 text-purple-900'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className={`px-4 cursor-pointer py-2 rounded ${isDarkMode
            ? 'text-gray-300 hover:text-white'
            : 'text-purple-700 hover:text-purple-900'
            } text-sm transition-colors`}
        >
          Cancel
        </button>
        <button
          onClick={handleAdd}
          className="px-4 cursor-pointer py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm transition-colors"
        >
          Add Task
        </button>
      </div>
    </Modal>
  );
};