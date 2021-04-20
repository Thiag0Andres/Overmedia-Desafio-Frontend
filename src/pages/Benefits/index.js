import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Footer from '../../components/Footer';

// Icons
import Grupo578 from '../../assets/Grupo 578.svg';
import Grupo580 from '../../assets/Grupo 580.svg';
import Grupo592 from '../../assets/Grupo 592.svg';
import { MdKeyboardArrowRight } from 'react-icons/md';

// Styles
import './styles.css';

function Benefits() {
  const history = useHistory();

  const [active, setActive] = useState(true);

  const handlePageBenefitsVIBE = () => {
    history.push('/menu-beneficios/VIBE');
  };
  return (
    <div id="benefits-container">
      <div className="header">
        <h1>Benefícios</h1>
        <p>Vantagens que oferecemos</p>
      </div>

      <ul>
        <li className="li-1" onClick={handlePageBenefitsVIBE}>
          <div className="left-edge" />
          <div className="image-content">
            <img src={Grupo578} alt="" />
          </div>
          <div>
            <h2 className="title-info">Benefícios VIBE</h2>
            <p className="text-info">100% visualizado</p>
          </div>
          <MdKeyboardArrowRight size={24} color="#650D99" className="arrow" />
        </li>

        <li className="li-2">
          <div className="left-edge" />
          <div className="image-content">
            <img src={Grupo580} alt="" />
          </div>
          <div>
            <h2 className="title-info">Nossos Diferenciais</h2>
            <p className="text-info">80% visualizado</p>
          </div>
          <MdKeyboardArrowRight size={24} color="#650D99" className="arrow" />
        </li>

        <li className="li-3">
          <div className="left-edge" />
          <div className="image-content">
            <img src={Grupo592} alt="" />
          </div>
          <div>
            <h2 className="title-info">+ Benefícios</h2>
            <p className="text-info">100% visualizado</p>
          </div>
          <MdKeyboardArrowRight size={24} color="#650D99" className="arrow" />
        </li>
      </ul>

      <div className="content-footer">
        <Footer IconP={!active} IconB={active} />
      </div>
    </div>
  );
}

export default Benefits;
