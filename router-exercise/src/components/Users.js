import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersCount(data.length);
        setUsers(data);
      });
  }, []);

  return (
    <div className="users-wrapper">
      <h2>Users</h2>
      <ul className="users">
        {users.map((user, index) => {
          return (
            <li key={user.id}>
              <Link to={`${user.id}`} state={{ user, totalUsers: usersCount }}>
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Users;
