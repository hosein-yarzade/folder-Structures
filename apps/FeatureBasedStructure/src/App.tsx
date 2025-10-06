import React from "react";
import TodoPage from "./features/todos/TodoPage";

const App: React.FC = () => (
  <div className="app">
    <h1> Todo App (Feature-Based + TS)</h1>
    <TodoPage />
  </div>
);

export default App;
