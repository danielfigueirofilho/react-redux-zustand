import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

import { store } from "./store/index.ts";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <TodoList></TodoList>
      <AddTodo></AddTodo>
    </Provider>
  );
}
