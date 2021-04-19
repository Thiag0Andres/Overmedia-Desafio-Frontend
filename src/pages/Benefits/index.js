import React from 'react';

// Components
import Footer from '../../components/Footer';

// Icons
import Grupo578 from '../../assets/Grupo 578.svg';
import Grupo580 from '../../assets/Grupo 580.svg';
import Grupo592 from '../../assets/Grupo 592.svg';

// Styles
import './styles.css';

function Benefits() {
  return (
    <div id="benefits-container">
      <div className="header">
        <h1>Benefícios</h1>
        <p>Vantagens que oferecemos</p>
      </div>

      <ul>
        <li>
          <div className="left-edge" />
          <div className="image-content">
            <img src={Grupo578} alt="" />
          </div>
          <div>
            <h2 className="title-info">Bônus PPR</h2>
            <p className="text-info">2,4 salários por ano</p>
          </div>
          <div className="arrow" />
        </li>

        <li>
          <div className="left-edge" />
          <div className="image-content">
            <img src={Grupo580} alt="" />
          </div>
          <div>
            <h2 className="title-info">Início</h2>
            <p className="text-info">12/05/2021</p>
          </div>
          <div className="arrow" />
        </li>

        <li>
          <div className="left-edge" />
          <div className="image-content">
            <img src={Grupo592} alt="" />
          </div>
          <div>
            <h2 className="title-info">Localização</h2>
            <p className="text-info">Escritório VIVO São Paulo</p>
          </div>
          <div className="arrow" />
        </li>
      </ul>

      <div className="content-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Benefits;
