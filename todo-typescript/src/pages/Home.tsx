import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
import { getBaseUrl } from "../helpers/utils";
import { errorCatcher } from "../helpers/utils";
import { ToastContainer } from "react-toastify";

// - typescript'te type tanimlari, type alias'lar ve interface'ler .env dosyalarinin isleyis mantiginda da	oldugu gibi global olarak saklanabilmektedir, bunu yapmak icin sonu Typescript Declaration File yani uzantisi .d.ts olan bir dosya olusturup tanimlari burada yapmak yeterlidir. Burada tanimlananlara projenin her yerinden ekstra bir islem yapmak gerekmeksizin aVarName : dDotTsFileTypeDeclaration seklinde erisilebilmektedir. bu proje icin types.d.ts dosyasi buna ornektir.

// export interface TodoType {
//   id: string | number;
//   task: string;
//   isDone: boolean;
// }

const Home = () => {
  // ! Normalde bir function'in, method'un, hook'un dondurecegi degerin type'ini aFunc<GenericType>(arguments) ile cagirirken belirtmek icin ilgili function'in aFunc<T>(paramaters): T {...} seklinde declare edilmis olmasi gerekir. Ancak react'ta kullanilan kutuphaneler ve react built-in method'lari, hook'lari kendi typescript type'larini @types/react veya @types/... 'da toplarlar. Bu nedenle kutuphane kurulduktan sonra kullanirken direkt olarak aFunc<GenericType>(arguments) ile dondurulen degerin type'lari belirlenebilmektedir.
  const [todos, setTodos] = useState<TodoType[]>([]);
  const BASE_URL = getBaseUrl();

  // ? tscongig > target -> ES5/ES3'te async fonksiyonlar void döndüremez. async fonksiyonlar, her zaman bir Promise döndürür ve bu nedenle doğru dönüş tipi Promise<void> olmalıdır.

  // ? Asagidaki iki yapi tamamen ayni islevdedir, icinde TodoType interface'ine uygun bir veri(object ya da function) olan bir array dondurup varName degiskenine assign edilir.
  // const [varName] = aFunc<TodoType[]>(argument);

  // function aFunc<T>(parameter: any): T {
  //   let someTtype: T;
  //   // ...
  //   return someTtype;
  // }
  // const varname: TodoType[] = aFunc<TodoType[]>(argument);

  const getTodos = async (): Promise<void> => {
    try {
      const { data } = await axios<TodoType[]>(BASE_URL);
      data.sort((a, b) => parseInt(b.id as string) - parseInt(a.id as string));
      // data.sort((a, b) => +b.id - +a.id);
      setTodos(data); // (4) [{…}, {…}, {…}, {…}]
      // console.log(data);
      data.forEach((todo: TodoType) => {
        // console.log(todo); // {task: 'task 1', isDone: false, id: '1'} \n ...
      });
      // ! typescript'te catch argument type'i unknown veya any olmak zorundadir.
    } catch (error: unknown) {
      errorCatcher(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm getTodos={getTodos} />
      <TodoList todos={todos} getTodos={getTodos} />
      <ToastContainer />
    </div>
  );
};

export default Home;
