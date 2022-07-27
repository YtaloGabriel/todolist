import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Tasks/TaskItem.module.css';
import EditButton from './EditButton';
import RemoveButton from './RemoveButton';

const TaskItem = ({ id, state, name, date, category }) => {
  const { tasksList, setTasksList } = React.useContext(GlobalContext);
  const taskElement = React.useRef();

  const toggleTasks = ({ target }) => {
    const itemId = target.parentElement.id;

    const changeTask = tasksList.filter((i) => {
      if (i.taskId === itemId && i.taskState === 'opened') {
        i.taskState = 'closed';
      } else if (i.taskId === itemId && i.taskState === 'closed') {
        i.taskState = 'opened';
      }
      return i;
    });

    setTasksList([changeTask, ...changeTask]);
  };

  return (
    <section
      className={`${Styles.container} ${state}`}
      id={id}
      ref={taskElement}
    >
      <div className={Styles.checkBox} onClick={toggleTasks}></div>

      <div className={Styles.info}>
        <h4 className={Styles.infoTitle}>{name}</h4>
        {category && <span className={Styles.infoCategory}>{category}</span>}
        {date && <span className={Styles.infoDate}>{date}</span>}
      </div>

      <div className={Styles.options}>
        <EditButton parent={taskElement} />
        <RemoveButton parent={taskElement} />
      </div>
    </section>
  );
};

export default TaskItem;
