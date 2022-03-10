import React, { useState } from "react";
import "./App.css";

import InputFields from "./components/InputFields";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div>
      <span className='heading'>Taksify</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
};

export default App;
