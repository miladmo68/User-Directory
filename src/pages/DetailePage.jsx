import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function DetailePage() {
  const { selectedUser } = useContext(AppContext);

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {selectedUser.name}
            </h1>
            <p className="text-xl text-gray-600">{selectedUser.email}</p>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-2">
          <strong>Phone:</strong> {selectedUser.phone}
        </p>
        <p className="text-xl text-gray-700 mb-2">
          <strong>Website:</strong> {selectedUser.website}
        </p>
        <p className="text-xl text-gray-700 mb-4">
          <strong>Company:</strong> {selectedUser.company.name}
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Address:</h2>
        <p className="text-xl text-gray-700 mb-2">
          <strong>Street:</strong> {selectedUser.address.street},{" "}
          <strong>Suite:</strong> {selectedUser.address.suite}
        </p>
        <p className="text-xl text-gray-700 mb-2">
          <strong>City:</strong> {selectedUser.address.city},{" "}
          <strong>Zipcode:</strong> {selectedUser.address.zipcode}
        </p>

        {/* Add to Favorite Button */}
        <div className="flex justify-center mt-6">
          <button className="py-2 px-6 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-semibold shadow-md transition duration-300">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailePage;
