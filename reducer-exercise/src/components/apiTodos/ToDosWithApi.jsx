import axios from "axios";
import React, { useEffect, useState } from "react";
import { toastErrorNotify } from "../../helper/ToastNotify";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";

const ToDosWithApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleClickOutside = (event) => {
    const modal = document.getElementById("addToDoModal");
    if (event.target === modal) {
      document.getElementById("addToDoForm").reset();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const url = process.env.REACT_APP_API_URL;

  async function getToDos() {
    try {
      const response = await axios(url);
      setData(response.data);
      // console.log(data);
      if (Math.trunc(response.status / 100) !== 2) {
        setError(true); // Girilen URL'ye gore API'de veri yoksa
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      toastErrorNotify(error);
      console.log(error);
    }
  }

  useEffect(() => {
    getToDos();
  }, []);

  // console.log(data);

  return (
    <>
      {/* Modal */}
      <AddToDo getToDos={getToDos} />

      {error ? (
        <div className="error-wrapper flex flex-col justify-center items-center gap-3">
          <h1 className="text-xl text-danger">Oops, something went wrong</h1>
          <p className="italic">Check console to display error message</p>
        </div>
      ) : (
        <ToDos data={data} getToDos={getToDos} />
      )}
    </>
  );
};

// ! Ust component'lardaki bu component'in degisimini etkilemeyecek bir state degisimi oldugunda bu component'in render olmasi istenmiyorsa export kisminda React.memo kullanilabilir. React.memo kullanırken dikkatli olun, çünkü tüm durumlar için uygun değildir ve bazen performansı düşürebilir. İç içe bileşenlerin karmaşıklığı ve sıklığı düşünüldüğünde, kullanılması mantıklıdır.
export default React.memo(ToDosWithApi);
