// components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todos = useSelector(state => state.todos);
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Todo App</h1>
        <div className="flex items-center space-x-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            Total: {totalTodos}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            Done: {completedTodos}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;