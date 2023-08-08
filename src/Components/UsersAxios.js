import axios from "axios";
import React, { useEffect, useState } from "react";

function UsersAxios() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")      
      .then((res) => {
        setUsers(res.data);
        //console.log(res)
      })
      .catch((e) => console.log(e))
      .finally(()=>setIsLoading(false));
  }, []);

  return (
    <div>
      <br />
      <h1 style={{ margin: 0, padding: 0 }}>Users Axios</h1>
      <br />
      {isLoading && <div>Loading</div>}
      <br />
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UsersAxios;
