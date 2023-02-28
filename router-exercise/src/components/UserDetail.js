import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  // console.log(useParams());
  // console.log(id);

  const location = useLocation();
  console.log(location);

  const [user, setUser] = useState(location.state?.user);
  // console.log(user);
  const [totalUsers, setTotalUsers] = useState(location.state?.totalUsers);
  // console.log(totalUsers);

  useEffect(() => {
    if (!user) {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data[id - 1]);
          setTotalUsers(data.length);
        });
    }
  }, [user, id]);

  return (
    <div className="json-wrapper">
      <h2>User details</h2>
      {user && <pre className="json">{JSON.stringify(user, null, 2)}</pre>}
      {+id < totalUsers && (
        <Link
          to={`/users/${Number(id) + 1}`}
          onClick={() => {
            setUser({ ...user, id: user?.id + 1 });
          }}
        >
          Next User
        </Link>
      )}
    </div>
  );
};

export default UserDetail;
