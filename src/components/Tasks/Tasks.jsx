import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import ClosedTasks from './ClosedTasks';
import OpenedTasks from './OpenedTasks';

const Tasks = () => {
  const { tasksList } = React.useContext(GlobalContext);

  const openedTasksOnly = tasksList.filter((task) => {
    return task.taskState === 'opened';
  });

  const closedTasksOnly = tasksList.filter((task) => {
    return task.taskState === 'closed';
  });

  const tasksRender = () => {
    return (
      <section>
        <OpenedTasks data={openedTasksOnly} />
        <ClosedTasks data={closedTasksOnly} />
      </section>
    );
  };

  // Component Rendering
  if (tasksList.length) {
    return tasksRender();
  } else {
    return 'Sem informações';
  }
};

export default Tasks;
