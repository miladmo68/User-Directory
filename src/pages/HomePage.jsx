import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import UserItem from "../components/UserItem";

const HomePage = () => {
  const { users, setUsers } = useContext(AppContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Error fetching users:", error));
  }, []);
  //   console.log(users);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">
        User Directory
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
