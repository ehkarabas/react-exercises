import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todo.todoList);

  const handleClearList = () => {
    dispatch(clearTodo());
  };

  console.log(toDoList);

  return (
    <div>
      <div>
        {toDoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
