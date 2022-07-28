import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Header/Modal.module.css';
import CloseIcon from '../../assets/icons/Cancel.svg';

const Modal = ({ finality, name, date, category, buttonRef }) => {
  const { setModal, tasksList, setTasksList } = React.useContext(GlobalContext);

  const modalMarginTop = buttonRef.current.offsetTop;
  const modalMaxWidth = buttonRef.current.clientWidth;

  const modalLimbo = React.useRef();

  const inputName = React.useRef();
  const inputDate = React.useRef();
  const inputCate = React.useRef();

  const [inputNameValue, setInputNameValue] = React.useState(name);
  const [inputDateValue, setInputDateValue] = React.useState(date);
  const [inputCateValue, setInputCateValue] = React.useState(category);

  const inputNameValueChange = ({ target }) => setInputNameValue(target.value);
  const inputDateValueChange = ({ target }) => setInputDateValue(target.value);
  const inputCateValueChange = ({ target }) => setInputCateValue(target.value);

  const checkModalOutsideClick = ({ target }) => {
    target === modalLimbo.current && setModal(false);
  };

  const modalName = () => {
    const teste = 'Nome';
    return teste;
  };

  // Function executes on send button click
  const modalSubmit = (event) => {
    event.preventDefault();

    const createTask = () => {
      // get inputs data and put info in Context.
      try {
        const taskName = inputNameValue;
        const taskDate = inputDateValue;
        const taskCate = inputCateValue;

        const taskId = `task${tasksList.length + 1}`;
        const taskState = 'opened';

        setTasksList([
          { taskId, taskState, taskName: taskName, taskDate, taskCate },
          ...tasksList,
        ]);
      } catch (err) {
        setModal(false);
      } finally {
        setModal(false);
      }
    };

    const editTask = () => {
      console.log('Editar');
    };

    // execute finality function
    if (finality !== 'edit') {
      createTask();
    } else {
      editTask();
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
            <p className={Styles.modalTit}>
              {finality === 'edit' ? 'Editar Tarefa' : 'Criar Tarefa'}
            </p>
            <span
              className={Styles.modalCloseIcon}
              onClick={() => {
                setModal(false);
              }}
            >
              <img src={CloseIcon} alt="Close Icon" />
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
                value={inputNameValue}
                onChange={inputNameValueChange}
                required
              />
            </label>

            <label className={Styles.label}>
              <span>Data</span>
              <input
                ref={inputDate}
                type="date"
                className={Styles.input}
                value={inputDateValue}
                onChange={inputDateValueChange}
              />
            </label>

            <label className={Styles.label}>
              <span>Categoria</span>
              <input
                ref={inputCate}
                type="text"
                className={Styles.input}
                value={inputCateValue}
                onChange={inputCateValueChange}
              />
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
