import { useState } from "react";
import type { SubmitEvent } from "react";

import { useDispatch } from "react-redux";
import { add } from "../store/index";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  function handleNewTodo(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(add({ newTodo }));
    setNewTodo("");
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Adicione um todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
