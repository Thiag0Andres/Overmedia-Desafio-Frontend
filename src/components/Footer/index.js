import React from 'react';
import { useHistory } from 'react-router-dom';

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

  const handlePageHome = () => {
    history.push('/');
  };

  const handlePageBenefits = () => {
    history.push('/menu-beneficios');
  };

  return (
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
      <div className="content-hands">
        <img src={svg215654} alt="" />
      </div>
    </div>
  );
}

export default Footer;
