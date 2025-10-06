import React, { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import TodoList from "./components/TodoList";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";

const TodoPage: React.FC = () => {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="todo-page">
      <div className="todo-inputs">
        <Input
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
