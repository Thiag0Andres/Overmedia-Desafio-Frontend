import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Footer from '../../components/Footer';

// Icons
import svg685352 from '../../assets/685352.svg';
import svg2035128 from '../../assets/2035128.svg';
import Grupo261 from '../../assets/Grupo 261.svg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// Styles
import './styles.css';

function BenefitsVIBE() {
  const history = useHistory();

  const handlePageBenefits = () => {
    history.push('/menu-beneficios');
  };

  return (
    <div id="benefits-container-vibe">
      <div className="header">
        <span onClick={handlePageBenefits}>
          <MdKeyboardArrowLeft size={28} color="#FAF9FA" />
          Benefícios
        </span>
        <div>
          <h1>VIBE</h1>
          <p>Benefícios flexíveis a sua rotina</p>
        </div>
        <img src={Grupo261} alt="" />
      </div>

      <ul>
        <li>
          <div className="image-content">
            <img src={svg685352} alt="" />
          </div>
          <h2 className="title-info">Alimentação e refeição</h2>
          <MdKeyboardArrowRight size={24} color="#650D99" className="arrow" />
        </li>

        <li>
          <div className="image-content">
            <img src={svg2035128} alt="" />
          </div>
          <h2 className="title-info">Assistência Médica</h2>
          <MdKeyboardArrowRight size={24} color="#650D99" className="arrow" />
        </li>

        <li>
          <div className="image-content">
            <img src={svg2035128} alt="" />
          </div>
          <h2 className="title-info">Assistência Odontológica</h2>
          <MdKeyboardArrowRight size={24} color="#650D99" className="arrow" />
        </li>
      </ul>
    </div>
  );
}

export default BenefitsVIBE;
