import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Tasks/TasksButtons.module.css';

const RemoveButton = ({ parent }) => {
  const { tasksList, setTasksList } = React.useContext(GlobalContext);

  const removeItem = () => {
    console.log(parent.current);

    const itemId = parent.current.id;

    const removeTask = tasksList.filter((i) => {
      return i.taskId !== itemId;
    });

    setTasksList(removeTask);
  };

  return <button className={Styles.remove} onClick={removeItem}></button>;
};

export default RemoveButton;
