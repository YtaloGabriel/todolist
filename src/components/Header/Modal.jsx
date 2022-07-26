import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Header/Modal.module.css';

const Modal = ({ buttonRef }) => {
  const { setModal, tasksList, setTasksList } = React.useContext(GlobalContext);

  const modalLimbo = React.useRef();
  const inputName = React.useRef();
  const inputDate = React.useRef();
  const inputCate = React.useRef();

  const modalMarginTop = buttonRef.current.offsetTop;
  const modalMaxWidth = buttonRef.current.clientWidth;

  const checkModalOutsideClick = ({ target }) => {
    target === modalLimbo.current && setModal(false);
  };

  const modalSubmit = (event) => {
    event.preventDefault();

    // get inputs data and put info in Context.
    try {
      const taskName = inputName.current.value;
      const taskDate = inputDate.current.value;
      const taskCate = inputCate.current.value;
      const taskId = `task${tasksList.length + 1}`;
      const taskState = 'opened';

      setTasksList([
        ...tasksList,
        { taskId, taskState, taskName, taskDate, taskCate },
      ]);
    } catch (err) {
      setModal(false);
    } finally {
      setModal(false);
    }
  };

  const modalRender = () => {
    return (
      <section
        className={Styles.modalContainer}
        onMouseDown={checkModalOutsideClick}
        ref={modalLimbo}
      >
        <div
          className={Styles.modalContent}
          // Regaining button data to match screen placement
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

          <form className={Styles.form} onSubmit={modalSubmit}>
            <label className={Styles.label}>
              <span>Nome da Tarefa *</span>
              <input
                ref={inputName}
                type="text"
                className={Styles.input}
                required
              />
            </label>

            <label className={Styles.label}>
              <span>Data</span>
              <input ref={inputDate} type="date" className={Styles.input} />
            </label>

            <label className={Styles.label}>
              <span>Categoria</span>
              <input ref={inputCate} type="text" className={Styles.input} />
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

  // Component rendering
  return modalRender();
};

export default Modal;
