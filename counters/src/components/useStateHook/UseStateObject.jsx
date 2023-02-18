import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    surname: "Doe",
    salary: 0,
    toggle: 0,
  });

  const handleSalaryInc = () => {
    setPerson({ ...person, salary: person.salary + 500 });
  };

  const handleSalaryDec = () => {
    // ! {...prevObject,key:val}
    setPerson({
      ...person,
      salary: person.salary > 0 ? person.salary - 500 : (person.salary = 0),
    });
  };

  const handleNameToggle = () => {
    // ! {...prevObject,key:val}
    setPerson((prevPerson) => {
      // const toggle = prevPerson.toggle + 1;
      if ((prevPerson.toggle + 1) % 2) {
        return {
          ...prevPerson,
          toggle: prevPerson.toggle + 1,
          name: prevPerson.name.toUpperCase(),
          surname: prevPerson.surname.toUpperCase(),
        };
      } else {
        return {
          ...prevPerson,
          toggle: prevPerson.toggle + 1,
          name: prevPerson.name.toLowerCase(),
          surname: prevPerson.surname.toLowerCase(),
        };
      }
    });
    console.log(person.toggle);
    console.log(person);

    // setPerson((prevPerson) => {
    //   // !  Since the toggle variable has the same name as the toggle key(property name) in the prevPerson object, we can specify the toggle variable directly to the setPerson function as its object property(key-value).
    //   const toggle = prevPerson.toggle + 1;
    //   if (toggle % 2) {
    //     return {
    //       ...prevPerson,
    //       toggle,
    //       name: prevPerson.name.toUpperCase(),
    //       surname: prevPerson.surname.toUpperCase(),
    //     };
    //   } else {
    //     return {
    //       ...prevPerson,
    //       toggle,
    //       name: prevPerson.name.toLowerCase(),
    //       surname: prevPerson.surname.toLowerCase(),
    //     };
    //   }
    // });
  };

  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Object</h2>
      <h2 className="display-4">
        Name : {person.name} {person.surname}
      </h2>
      <h3 className="display-6">Salary : {person.salary}</h3>
      <button onClick={handleSalaryInc} className="btn btn-success">
        Salary Inc
      </button>
      <button onClick={handleNameToggle} className="btn btn-danger">
        Toggle
      </button>
      <button onClick={handleSalaryDec} className="btn btn-warning">
        Salary Dec
      </button>
    </div>
  );
};

export default UseStateObject;
