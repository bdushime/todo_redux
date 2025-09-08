// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';


const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <AddTodo />
        <FilterButtons />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;