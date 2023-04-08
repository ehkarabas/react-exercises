import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { errorCatcher, getBaseUrl } from "../helpers/utils";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

type todoState = {
  isDone: boolean;
  task: string;
};

// + Type Alias ile function tanimlamak
// type AddFn = (text: string) => void;

const InputForm = ({ getTodos }: { getTodos(): Promise<void> }) => {
  const [todo, setTodo] = useState<todoState>({
    isDone: false,
    task: "",
  });
  const BASE_URL = getBaseUrl();

  const addTodo = async (todo: {
    task: string;
    isDone: boolean;
  }): Promise<void> => {
    try {
      await axios.post(BASE_URL, todo);
      await getTodos();
      toastSuccessNotify("todo successfully created");
    } catch (error) {
      errorCatcher(error);
    }
  };

  // const handleChange = (e: {
  //   target: { name: string; value: string; [key: string]: any };
  //   [key: string]: any;
  // }): void => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: {
  //   preventDefault(): void;
  //   [key: string]: any;
  // }): void => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!todo.task.trim()) {
      setTodo({
        ...todo,
        task: "",
      });
      toastWarnNotify("You cant submit an empty to-do.");
    } else {
      addTodo(todo);
      setTodo({
        ...todo,
        task: "",
      });
    }
  };

  // console.log(todo);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="input-form">
        <input
          name="task"
          value={todo.task}
          className="input-task"
          placeholder="Type a todo"
          type="text"
          maxLength={40}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          className="btn-hover btn-color"
          type="submit"
          // disabled={!todo.task.trim()}
        >
          New Todo
        </button>
      </div>
    </form>
  );
};

export default InputForm;
