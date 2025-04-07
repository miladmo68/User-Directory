import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import UserFavarite from "../components/UserFavarite";

const FavoritePage = () => {
  const { favariteUser } = useContext(AppContext);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">
        Favarite Users
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {favariteUser.map((user) => (
          <UserFavarite user={user} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritePage;
