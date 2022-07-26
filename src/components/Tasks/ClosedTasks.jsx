import React from 'react';
import TaskItem from './TaskItem';
import Styles from '../css/Tasks/Tasks.module.css';

const ClosedTasks = ({ data }) => {
  const closedTasksRender = () => {
    return (
      <section className={Styles.container}>
        <div className={Styles.contentTop}>
          <h3 className={Styles.title}>
            Tarefas Fechadas - <span>({data.length})</span>
          </h3>
        </div>

        {data.length &&
          data.map(({ taskId, taskState, taskName, taskDate, taskCate }) => {
            return (
              <TaskItem
                key={taskId}
                id={taskId}
                state={taskState}
                name={taskName}
                date={taskDate}
                category={taskCate}
              />
            );
          })}
      </section>
    );
  };

  if (data.length) {
    return closedTasksRender();
  } else {
    return null;
  }
};

export default ClosedTasks;
