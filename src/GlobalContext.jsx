import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  const [taskList, setTaskList] = React.useState([]);

  return (
    <GlobalContext.Provider value={{ modal, setModal, taskList, setTaskList }}>
      {children}
    </GlobalContext.Provider>
  );
};
