import type { Todo } from "../types";

export async function fetchTodos(): Promise<Todo[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Learn React + TS", done: true },
        { id: 2, text: "Build a feature-based project", done: false },
      ]);
    }, 800);
  });
}

export async function addTodoApi(text: string): Promise<Todo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), text, done: false });
    }, 500);
  });
}
