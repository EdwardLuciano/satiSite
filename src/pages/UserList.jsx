import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = response.data;

      // Запрос аватарок для каждого пользователя
      const usersWithAvatars = await Promise.all(
        usersData.map(async (user) => {
          const avatarResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/photos/${user.id}`
          );
          return {
            ...user,
            avatar: avatarResponse.data.url,
          };
        })
      );

      setUsers(usersWithAvatars);
    }

    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        </div>
      ))}
    </div>
  );
}

export default UserList;
