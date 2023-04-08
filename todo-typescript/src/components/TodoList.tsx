import React from "react";
// import {FC} from "react" // React.FC yerine FC yazmak icin, anlasilirligi azaltir
import TodoListItem from "./TodoListItem";
// import DeleteModalTwElements from "./DeleteModalTwElements";
// import DeleteModalFlowbite from "./DeleteModalFlowbite";
// import DeleteModal from "./DeleteModal";

// import { TodoType } from "../pages/Home";

interface ITodoListProps {
  todos: TodoType[];
  getTodos(): Promise<void>;
}

// const TodoList = ({ todos }: ITodoListProps) => {
const TodoList: React.FC<ITodoListProps> = ({ todos, getTodos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index: number) => {
          return (
            <TodoListItem
              todo={todo}
              key={`todo-${index + 1}`}
              getTodos={getTodos}
            />
          );
        })}
      </ul>
      {/* <DeleteModalTwElements /> */}
      {/* <DeleteModalFlowbite /> */}
    </>
  );
};

export default TodoList;
