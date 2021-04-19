import React from 'react';
import { useHistory } from 'react-router-dom';

// Icons
import Grupo20 from '../../assets/Grupo 20.svg';
import svg768049 from '../../assets/768049.svg';
import svg215654 from '../../assets/215654.svg';

// Styles
import './styles.css';

function Footer() {
  const history = useHistory();

  const handlePageHome = () => {
    history.push('/');
  };

  const handlePageBenefits = () => {
    history.push('/menu-beneficios');
  };

  return (
    <div id="Footer">
      <div>
        <span onClick={handlePageHome}>
          <img src={svg768049} alt="" />
        </span>
        <span onClick={handlePageBenefits}>
          <img src={Grupo20} alt="" />
        </span>
      </div>
      <div className="content-hands">
        <img src={svg215654} alt="" />
      </div>
    </div>
  );
}

export default Footer;
