import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [favariteUser, setFavariteUser] = useState([]);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        favariteUser,
        setFavariteUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
