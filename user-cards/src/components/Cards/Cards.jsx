import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cards.css";

const Hooks = ({ usersCount }) => {
  // console.log(usersCount);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios(`https://randomuser.me/api/?results=${usersCount}`)
      .then((response) =>
        response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.large}`,
        }))
      )
      .then((data) => {
        setUsers(data);
      });
  }, [usersCount]);

  return (
    <div className="users">
      {usersCount
        ? users.map((user, index) => (
            <div key={index} className="users__user">
              <img src={user.image} className="users__avatar" alt="#" />
              <div className="users__meta">
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Hooks;
