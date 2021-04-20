import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import ModalAcceptProposal from '../../components/ModalAcceptProposal';

// Icons
import Grupo20 from '../../assets/Grupo 20.svg';
import Grupo21 from '../../assets/Grupo 21.svg';
import svg768049 from '../../assets/768049.svg';
import svg768050 from '../../assets/768050.svg';
import svg215654 from '../../assets/215654.svg';

// Styles
import './styles.css';

function Footer({ IconP, IconB }) {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handlePageHome = () => {
    history.push('/');
  };

  const handlePageBenefits = () => {
    history.push('/menu-beneficios');
  };

  return (
    <>
      <div id="Footer">
        <div className="icons-content">
          <div
            className={IconP ? 'icon-footer-active' : 'icon-footer-normal'}
            onClick={handlePageHome}
          >
            <img src={IconP ? svg768049 : svg768050} alt="" />
          </div>
          <div
            className={IconB ? 'icon-footer-active' : 'icon-footer-normal'}
            onClick={handlePageBenefits}
          >
            <img src={IconB ? Grupo21 : Grupo20} alt="" />
          </div>
        </div>
        {IconP && (
          <div className="box-text">
            <h1 className="title-box">Gostou da proposta?</h1>
            <p className="text-box">
              Responda se aceita fazer parte do nosso time.
            </p>
          </div>
        )}
        <div className="content-hands" onClick={() => setShow(true)}>
          <img src={svg215654} alt="" />
        </div>
      </div>
      {show && (
        <ModalAcceptProposal show={show} onHide={() => setShow(false)} />
      )}
    </>
  );
}

export default Footer;
