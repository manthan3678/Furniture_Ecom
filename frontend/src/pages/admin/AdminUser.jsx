import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState([{}]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/register")
      .then((result) => {
        console.log(result.data);

        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <AdminLayout>
      <table className="table  table-hover table-bordered">
        <thead>
          <tr className="table-dark">
            <th scope="col">User-Name</th>
            <th scope="col">Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td className="text-capitalize">{user.name}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default AdminUser;
