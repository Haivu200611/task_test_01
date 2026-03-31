import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="card">
    <h2>User List</h2>

    <div className="table-container">
        <table className="pro-table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            </tr>
        </thead>

        <tbody>
            {users.map((u) => (
                <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.firstName} {u.lastName}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
  );
}

export default Users;