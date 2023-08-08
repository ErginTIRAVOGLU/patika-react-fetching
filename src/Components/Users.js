import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        //console.log(data)
      })
      .catch((e) => console.log(e))
      .finally(()=>setIsLoading(false));
  }, []);

  return (
    <div>
      <br />
      <h1 style={{ margin: 0, padding: 0 }}>Users</h1>
      <br />
      {isLoading && <div>Loading</div>}
      <br />
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
