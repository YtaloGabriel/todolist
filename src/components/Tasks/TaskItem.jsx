import React from 'react';
import Styles from '../css/Tasks/TaskItem.module.css';

const TaskItem = ({ id, state, name, date, category }) => {
  console.log(id);

  return (
    <section className={Styles.container}>
      <div className={Styles.checkBox}></div>
      <div className={Styles.info}>
        <h4 className={Styles.infoTitle}>{name}</h4>
        {category && <span className={Styles.infoCategory}>{category}</span>}
        {date && <span className={Styles.infoDate}>{date}</span>}
      </div>
      <div className={Styles.options}>options</div>
    </section>
  );
};

export default TaskItem;
