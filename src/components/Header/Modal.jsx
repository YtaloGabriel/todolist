import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Header/Modal.module.css';

const Modal = ({ buttonRef }) => {
  const { setModal } = React.useContext(GlobalContext);
  const modalLimbo = React.useRef();

  const modalMarginTop = buttonRef.current.offsetTop;
  const modalMaxWidth = buttonRef.current.clientWidth;

  const checkOutsideClick = ({ target }) => {
    if (target === modalLimbo.current) setModal(false);
  };

  return (
    <section
      className={Styles.modalContainer}
      onClick={checkOutsideClick}
      ref={modalLimbo}
    >
      <div
        className={Styles.modalContent}
        // Resgatando dados do botão para igualar o posicionamento na tela
        style={{
          marginTop: `${modalMarginTop}px`,
          maxWidth: `${modalMaxWidth}px`,
        }}
      >
        <div className={Styles.modalTop}>
          <p className={Styles.modalTit}>Adicionar Tarefa</p>
          <span
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </span>
          <span className={Styles.gradientBar}></span>
        </div>

        <form className={Styles.form}>
          <label className={Styles.label}>
            <span>Nome da Tarefa *</span>
            <input type="text" className={Styles.input} required />
          </label>

          <label className={Styles.label}>
            <span>Data</span>
            <input type="date" className={Styles.input} />
          </label>

          <label className={Styles.label}>
            <span>Categoria</span>
            <input type="text" className={Styles.input} />
          </label>

          <div className={Styles.modalBottom}>
            <span
              className={Styles.cancel}
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </span>
            <button className={Styles.submit}>Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
