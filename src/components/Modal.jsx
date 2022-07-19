import React from 'react';
import { GlobalContext } from '../GlobalContext';
import Styles from './css/Header/Modal.module.css';

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
        Modal
      </div>
    </section>
  );
};

export default Modal;
