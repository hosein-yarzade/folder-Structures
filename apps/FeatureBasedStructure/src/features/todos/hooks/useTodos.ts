import { useEffect, useState } from "react";
import { fetchTodos, addTodoApi } from "../api/todoApi";
import type { Todo } from "../types";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all todos
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        setError("Failed to load todos"+ err as string);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  // Add new todo
  const addTodo = async (text: string) => {
    const newTodo = await addTodoApi(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  // Toggle completion
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, loading, error, addTodo, toggleTodo, deleteTodo };
};
