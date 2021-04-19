import React from 'react';

// Icons
import svg685352 from '../../assets/685352.svg';
import Grupo277 from '../../assets/Grupo 277.svg';
import Alimetação_Refeição from '../../assets/Alimetação_Refeição.png';

// Styles
import './styles.css';

function ModalAlimentação({ show, onHide }) {
  return (
    <div id="modal-alimentação">
      <div className="opacity" />
      <div className="content">
        <div className="header">
          <div className="image-content">
            <img src={svg685352} alt="" />
          </div>
          <h2 className="title">Alimentação e refeição</h2>
          <img
            className="icon-cancel"
            src={Grupo277}
            alt=""
            onClick={() => {
              onHide();
            }}
          />
        </div>
        <img className="imageAR" src={Alimetação_Refeição} alt="" />
        <div className="text-content">
          <p>
            Você pode distribuir o valor total do benefício entre os cartões de
            Vale Alimentação e Refeição ou usar um único cartão.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalAlimentação;
