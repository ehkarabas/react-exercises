import React from "react";
import AddToDoReducer from "./AddToDoReducer";
import ToDosReducer from "./ToDosReducer";

const ToDosWithReducer = ({
  toDo,
  setToDo,
  stateToDo,
  dispatchToDo,
  handleAddToDoSubmit,
  handleEditToDoSubmit,
}) => {
  return (
    <>
      {/* Modal */}
      <AddToDoReducer
        toDo={toDo}
        setToDo={setToDo}
        handleAddToDoSubmit={handleAddToDoSubmit}
      />

      <ToDosReducer
        toDo={toDo}
        setToDo={setToDo}
        stateToDo={stateToDo}
        dispatchToDo={dispatchToDo}
        handleEditToDoSubmit={handleEditToDoSubmit}
      />
    </>
  );
};

// ! Ust component'lardaki bu component'in degisimini etkilemeyecek bir state degisimi oldugunda bu component'in render olmasi istenmiyorsa export kisminda React.memo kullanilabilir. React.memo kullanırken dikkatli olun, çünkü tüm durumlar için uygun değildir ve bazen performansı düşürebilir. İç içe bileşenlerin karmaşıklığı ve sıklığı düşünüldüğünde, kullanılması mantıklıdır.
export default React.memo(ToDosWithReducer);
