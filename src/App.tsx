/** Base component for the app, also has app-wide styles. */

import React from 'react';
import './App.css';
import TodoManager from './TodoManager';

function App() {

  return (
    <div className="App">
      <TodoManager />
    </div>
  );
}

export default App;
