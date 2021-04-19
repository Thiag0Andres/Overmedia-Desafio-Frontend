import React from 'react';

// Icons
import Grupo277 from '../../assets/Grupo 277.svg';
import svg215654 from '../../assets/215654.svg';

// Styles
import './styles.css';

function ModalAcceptProposal({ show, onHide }) {
  return (
    <div id="modal-accept-proposal">
      <div className="content">
        <div
          className="image-content"
          onClick={() => {
            onHide();
          }}
        >
          <img src={Grupo277} alt="" />
        </div>
        <h1 className="title">Aceita a proposta?</h1>
        <img className="image-hands" src={svg215654} alt="" />
        <div className="text-content">
          <p>
            Aceitar a proposta significa que nós vamos dar continuidade ao
            processo de contratação.
          </p>
        </div>
        <button className="accepted">Aceito</button>
        <button className="not-accepted">Não Aceito</button>
        <a href="">Ainda tenho dúvidas</a>
      </div>
    </div>
  );
}

export default ModalAcceptProposal;
