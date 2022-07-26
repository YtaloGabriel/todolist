import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  const [tasksList, setTasksList] = React.useState([]);

  return (
    <GlobalContext.Provider
      value={{ modal, setModal, tasksList, setTasksList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
