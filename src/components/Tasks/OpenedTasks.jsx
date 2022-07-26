import React from 'react';
import TaskItem from './TaskItem';
import Styles from '../css/Tasks/Tasks.module.css';

const OpenedTasks = ({ data }) => {
  const openedTasksRender = () => {
    return (
      <section className={Styles.container}>
        <div className={Styles.contentTop}>
          <h3 className={Styles.title}>
            Tarefas Abertas - <span>({data.length})</span>
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
    return openedTasksRender();
  } else {
    return null;
  }
};

export default OpenedTasks;
