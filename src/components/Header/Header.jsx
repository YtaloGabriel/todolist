import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Header/Header.module.css';
import Add from '../../assets/icons/Add.svg';
import Modal from './Modal';

const Header = () => {
  const { modal, setModal } = React.useContext(GlobalContext);
  const buttonRef = React.useRef();

  return (
    <header className={Styles.header}>
      <h1 className={Styles.title}>Lista de Tarefas</h1>

      <button
        className={Styles.addTask}
        onClick={() => {
          setModal(true);
        }}
        ref={buttonRef}
      >
        <span>
          <img src={Add} alt="Add Icon" />
        </span>
        <div className={Styles.addIcon}>Adicionar Tarefa</div>
      </button>

      {modal && (
        <Modal
          buttonRef={buttonRef}
          finality={'create'}
          name={'Teste'}
          date={'2012-12-12'}
          category={'teste'}
        />
      )}
    </header>
  );
};

export default Header;
