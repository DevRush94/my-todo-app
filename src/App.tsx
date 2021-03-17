import React from 'react';

import './App.css';
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'

function App() {
  return (
    <div className="AppWrapper">
      <TodoHeader />
      <TodoMain />
    </div>
  );
}

export default App;
