// components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, filter } = useSelector(state => state);

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'ACTIVE':
        return !todo.completed;
      case 'COMPLETED':
        return todo.completed;
      default:
        return true;
    }
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-medium text-gray-600 mb-2">
            {filter === 'ALL' ? 'No todos yet' : `No ${filter.toLowerCase()} todos`}
          </h3>
          <p className="text-gray-500">
            {filter === 'ALL' ? 'Add a new todo to get started!' : `You have no ${filter.toLowerCase()} tasks`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-6">
      <div className="space-y-3">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;