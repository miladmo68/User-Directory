import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { setSelectedUser, favariteUser, setFavariteUser } =
    useContext(AppContext);

  const handleDetail = () => {
    setSelectedUser(user);
  };
  const handleRemove = (id) => {
    setFavariteUser(favariteUser.filter((user) => user.id !== id));
  };
  // console.log(favariteUser);
  return (
    <li className="bg-white shadow-md rounded-2xl w-full max-w-sm p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* User name */}
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>

      {/* Short details */}
      <p className="text-gray-600 text-sm">{user.email}</p>
      <p className="text-gray-500 text-xs">{user.address.city}</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <Link
          to="/Detaile"
          onClick={handleDetail}
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          View Details
        </Link>
        <button
          onClick={() => handleRemove(user.id)}
          className="py-2 px-5 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default UserItem;
